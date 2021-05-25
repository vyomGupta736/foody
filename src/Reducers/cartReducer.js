import { ADD_ITEM_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_ITEM } from '../Actions/types';

const INITIAL_STATE = {
    items_in_cart : [],
    paid : false,
    schedule : null,
    payment : 0
}

export default cartReducer = (state=INITIAL_STATE,actions) => {
    switch(actions.type)
    {
        case ADD_ITEM_TO_CART:
            return {...state, items_in_cart : [...state.items_in_cart, {...actions.payload.item} ], payment :  state.payment+actions.payload.payment }
        case INCREASE_QUANTITY:
            return {...state, items_in_cart : [...actions.payload.filteredItems], payment : state.payment+actions.payload.payment }
        case DECREASE_QUANTITY:
            return {...state, items_in_cart : [...actions.payload.filteredItems], payment : state.payment-actions.payload.payment }
        case REMOVE_ITEM:
            return {...state, items_in_cart : [...actions.payload.filteredItems], payment : state.payment-actions.payload.payment }
        default:
            return state;
    }
}