import {FACEBOOK_LOGIN_SUCCESS
    , FACEBOOK_LOGIN_FAIL,
    GOOGLE_LOGIN_FAIL,
    GOOGLE_LOGIN_SUCCESS,
    LOGIN_TRIED,
    LOG_OUT
} from '../Actions/types';

const INITIAL_STATE = {
   facebook_info : null,
   google_info : null,
   logged_in : false,
   loading : false
}


export default oAuthReducer = (state=INITIAL_STATE,actions) => {
    switch(actions.type)
    {
        case FACEBOOK_LOGIN_SUCCESS:
            return {...state, facebook_info : actions.payload, logged_in : true, loading:false};
        case FACEBOOK_LOGIN_FAIL:
            return {...state, loading:false};
        case GOOGLE_LOGIN_SUCCESS:
            return {...state, google_info : actions.payload, logged_in : true, loading : false}
        case GOOGLE_LOGIN_FAIL:
            return {...state, loading:false }
        case LOGIN_TRIED:
            return {...state, loading : true}
        case LOG_OUT : 
            return {...INITIAL_STATE}
        default:
            return state;
    }
}
