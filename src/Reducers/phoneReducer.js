import {
    PHONE_LOGIN_FAIL,
    PHONE_LOGIN_SUCCESS,
    PHONE_LOGIN_MANUAL,
    PHONE_LOGIN_TRIED,
    PHONE_LOGIN_SUCCESS_AFTER,
    PHONE_LOGIN_ENTRY_FAIL,
    PHONE_LOGIN_CODE_FAIL,
    USER_INFO_SENT_TO_SERVERS,
    USER_REGISTERED,
    USER_REGISTERED_FAILED,
    LOG_OUT,
    USER_BASIC_INFO_ALREADY_PRESENT,
    USER_BASIC_INFO_NOT_PRESENT,
    PHONE_CLEAR
} from '../Actions/types';

const INITIAL_STATE = {
   phone_response : null,
   phone_info : null,
   loading : false,
   loginEntryFail : false,
   loginCodeFail : false,
   manualLogin : false,
   autoVerified : false,
   viaCodeDispatch : false,
   afterVerified : false,
   userName : '',
   email : '',
   phoneNumber : '',
   sending : true,
   sent : false,
   sentFailed : false,
}


export default phoneReducer = (state=INITIAL_STATE,actions) => {
    switch(actions.type)
    {
        case PHONE_LOGIN_SUCCESS:
            return {...state, phone_info : actions.payload, loading : false, autoVerified : true, viaCodeDispatch : false, loginCodeFail : false, loginEntryFail:false, sending : true}
        case PHONE_LOGIN_FAIL:
            return {...state, loading : false, loginFail : true}
        case PHONE_LOGIN_TRIED:
            return {...state, loading : true, triedPhoneNumber : actions.payload }
        case PHONE_LOGIN_MANUAL :
            return {...state, manualLogin : true, loading : false, phone_response : actions.payload, viaCodeDispatch : true, loginCodeFail : false, loginEntryFail : false }
        case PHONE_LOGIN_SUCCESS_AFTER :
            return {...state, phone_info : actions.payload, loading : false, autoVerified : false, afterVerified : true, viaCodeDispatch : false, loginCodeFail:false, loginEntryFail:false, sending : true}
        case PHONE_LOGIN_ENTRY_FAIL : 
            return {...INITIAL_STATE, loginEntryFail : true, loading : false}
        case PHONE_LOGIN_CODE_FAIL : 
            return {...INITIAL_STATE, loginCodeFail : true, loading : false}
        case USER_BASIC_INFO_ALREADY_PRESENT:
            return {...state, userName : actions.payload.name,emailID : actions.payload.emailID, phoneNumber : actions.payload.phoneNumber ,sending : false, sent : false}
        case USER_BASIC_INFO_NOT_PRESENT:
            return {...state, sending : false, sent : false}
        case USER_INFO_SENT_TO_SERVERS:
            return {...state, sending : true}
        case USER_REGISTERED : 
            return {...state, userName : actions.payload.name, email : actions.payload.emailID ,phoneNumber : actions.payload.phoneNumber, sending : false, sent : true }
        case USER_REGISTERED_FAILED :
            return {...INITIAL_STATE, sending : false, sent : false}
        case LOG_OUT:
             return {...INITIAL_STATE}
        case PHONE_CLEAR:
            return {...INITIAL_STATE}
        default:
            return state;
    }
}
