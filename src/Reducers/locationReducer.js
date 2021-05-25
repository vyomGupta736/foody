import { LOCATION_FAIL,
     LOCATION_SUCCESS,
     LOCATION_TRIED,
     LOCATION_MANUAL,
     LOG_OUT
 } from '../Actions/types';

 const INITIAL_STATE = {
     locationInfo : null,
     loading : false,
     locationFail : false,
     manual : false
 }

 export default locationReducer = (state=INITIAL_STATE,actions) => {
     switch(actions.type)
     {
         case LOCATION_SUCCESS :
             return {...state, locationInfo : actions.payload, loading : false}
         case LOCATION_TRIED:
             return {...state, loading : true, manual : false}
         case LOCATION_FAIL:
             return {...state, loading : false, locationFail : true}
         case LOCATION_MANUAL :
             return {...state, loading : false, manual : true}
         case LOG_OUT : 
             return {...INITIAL_STATE}
         default :
          return state;
     }
 }