import {combineReducers} from 'redux';
import oAuthReducer from './oAuthReducer';
import phoneReducer from './phoneReducer';
import locationReducer from './locationReducer';
import dataReducer from './dataReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    oAuthReducer : oAuthReducer,
    phoneReducer : phoneReducer,
    locationReducer : locationReducer,
    dataReducer : dataReducer,
    cartReducer : cartReducer
})