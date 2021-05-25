import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL,
    LOGIN_TRIED,
    GOOGLE_LOGIN_SUCCESS,
    GOOGLE_LOGIN_FAIL
} from './types';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from "react-native-fbsdk";
import { GoogleSignin } from '@react-native-community/google-signin';

export const facebookLogin = () => {
   return (dispatch) => 
   { 
       dispatch({type : LOGIN_TRIED});
       doFacebookLogin(dispatch);
   }
}

export const googleLogin = () => {
    return (dispatch) => 
    {
       dispatch({type : LOGIN_TRIED});
       doGoogleLogin(dispatch);
    }
}

const doFacebookLogin = async (dispatch) => {
    const result = await LoginManager.logInWithPermissions(["email"]);
    if(result.isCancelled)
    {
       return  dispatch({ type : FACEBOOK_LOGIN_FAIL })
    }
    else
    {
        const token = await AccessToken.getCurrentAccessToken();
        if(token)   
        {
          const infoRequest = new GraphRequest(
            '/me?fields=email,name,picture',
            null,
            (error, result) => {
              if (error) {
                console.log('Error fetching data: ' + error.toString());
                dispatch({ type : FACEBOOK_LOGIN_SUCCESS, payload : token})
              } else {
                console.log(result);
                dispatch({ type : FACEBOOK_LOGIN_SUCCESS, payload : result})
              }
            }
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
    }
}

const doGoogleLogin = async (dispatch) => {
    try {
        await GoogleSignin.configure();
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const userInfo = await GoogleSignin.signIn();
        console.log(userInfo);
        const token = await GoogleSignin.getTokens();
        if(token)
        {
            console.log(token);
            dispatch({type : GOOGLE_LOGIN_SUCCESS, payload : userInfo});
        }
      } catch (error)
      {
           console.log(error);
           dispatch({ type : GOOGLE_LOGIN_FAIL});
      }
}
