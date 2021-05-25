import { PHONE_LOGIN_TRIED,
     PHONE_LOGIN_SUCCESS,
     PHONE_LOGIN_MANUAL,
     PHONE_LOGIN_SUCCESS_AFTER,
     PHONE_LOGIN_ENTRY_FAIL,
     PHONE_LOGIN_CODE_FAIL,
     USER_INFO_SENT_TO_SERVERS,
     USER_REGISTERED,
     USER_REGISTERED_FAILED,
     USER_BASIC_INFO_ALREADY_PRESENT,
     USER_BASIC_INFO_NOT_PRESENT,
     PHONE_CLEAR
 } from './types';

import auth from '@react-native-firebase/auth';
import { instance } from '../Api/foodData';
import querystring from 'query-string';

export const phoneLogin = (number) => {
    return (dispatch) => {
        dispatch({type : PHONE_LOGIN_TRIED,payload : number});
        doPhoneLoginAuto(dispatch,number);
    }
};

export const userAdditionalInfo = (info) => {
    console.log(" inside phone actions ")
    console.log(info);
    return (dispatch) => {
        dispatch({type : USER_INFO_SENT_TO_SERVERS});
        doSendInfoToServers(dispatch,info);
    }
}

export const phoneClear = () => {
    return {
        type : PHONE_CLEAR
    }
}

export const manualPhoneLogin = (code,response) => {
    return (dispatch) => {
        dispatch({type : PHONE_LOGIN_TRIED});
        doLoginManual(dispatch,code,response);  
    }
}

export const isUserAlreadyPresent = (phoneNumber) => {
    return (dispatch) => {
        doCheckIsUserPresent(dispatch,phoneNumber);
    }
}

const doPhoneLoginAuto = async (dispatch,number) => {
    auth().onAuthStateChanged(async (user) => {
        if(user !== null)
        {
         const user = auth().currentUser;
         dispatch({type : PHONE_LOGIN_SUCCESS, payload : user});
         if(user !== null)
         {
           try
           {
             await auth().signOut();
             const user = auth().currentUser;
             console.log("after log out");
             console.log(user);
           }
            catch(err)
            {
              console.log(err);
            }
            
         }
        }
      else
      {
        console.log("user is null");
      }
    });

    try{
        const response = await auth().signInWithPhoneNumber('+91'+number);
        console.log(response);
        setTimeout(() => {dispatch({type : PHONE_LOGIN_MANUAL, payload : response})}, 1000);
     }catch(err)
     {
        console.log(err);
        dispatch({ type : PHONE_LOGIN_ENTRY_FAIL})
     }
    
};



const doSendInfoToServers = async (dispatch,info) => {
    
   const response = await instance.post('/addNewUserBasicInfo', 
     querystring.stringify({
         name : info.name,
         emailId : info.emailId,
         phoneNumber : info.phoneNumber
     })
   );
   
    if(response.status === 200)
    {
        console.log("inside last dispatch ");
        dispatch({type : USER_REGISTERED, payload : info})
    }
    else
    {
        console.log("inside last error dispatch ");
        dispatch({type : USER_REGISTERED_FAILED})
    }
}

const doCheckIsUserPresent = async (dispatch,phoneNumber) => {
    console.log("inside checking")
    const response = await instance.post('/isUserPresent',
    querystring.stringify({
        phoneNumber : phoneNumber
     })
    );
    console.log(response);
    if(response.status === 206)
    {
        dispatch({type : USER_BASIC_INFO_NOT_PRESENT});
    }
    else if(response.status === 200)
    {
        dispatch({type : USER_BASIC_INFO_ALREADY_PRESENT, payload : response.data});
    }
}

const doLoginManual = async (dispatch,code,response) => {
    try{
        const result =  await response.confirm(code);
        console.log(result);
        dispatch({ type : PHONE_LOGIN_SUCCESS_AFTER, payload : result.user });
     }catch(err)
     {
        console.log(err);
        dispatch({ type : PHONE_LOGIN_CODE_FAIL})
     }
}