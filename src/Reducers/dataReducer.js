import { DATA_FOUND_SUCCESS, DATA_NOT_FOUND, SELECTED_ITEM} from '../Actions/types'

const INITAL_STATE = {
    data : [],
    dataFoundError : false,
    loading : true,
    selectedItem : null
}

export default dataReducer = (state=INITAL_STATE, actions) => {
    switch(actions.type)
    {
        case DATA_FOUND_SUCCESS:
            console.log("got data from reducers ");
            return {...state, data : [...actions.payload], loading : false }
        case DATA_NOT_FOUND:
            return {...state, dataFoundError : true, loading : false}
        case SELECTED_ITEM:
            console.log("got called");
            return {...state, selectedItem : {...actions.payload} }
        default:
            return state
    }
}