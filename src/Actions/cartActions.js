import { ADD_ITEM_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_ITEM } from './types';

export const addItemToCart = (item) => {
    console.log(item);
    return {
        type : ADD_ITEM_TO_CART, payload : {item : item, payment : item.quantity*item.item.price}
    }
};

export const increaseQuantity = (selectedItem,items_in_cart) => {
    return (dispatch) => {
        const filteredItems =  items_in_cart.map(item => {
            if(item.item.name === selectedItem.item.name)
            {
                return {...item, quantity : item.quantity+1}
            }else
            {
                return {...item}
            }
        });
        console.log(filteredItems);
        dispatch({type : INCREASE_QUANTITY, payload : {filteredItems, payment : selectedItem.item.price} })
    }
}

export const decreaseQuantity = (selectedItem,items_in_cart) => {
    return (dispatch) => {
        var payment = 0;
        const filteredItems =  items_in_cart.map(item => {
            if(item.item.name === selectedItem.item.name)
            {
                if(item.quantity >= 2)
                {
                    payment = item.item.price;
                    return {...item, quantity : item.quantity-1}
                }
                else
                {
                    payment = 0;
                    return {...item, quantity : item.quantity}
                }
            }else
            {
                return {...item}
            }
        });
        console.log(filteredItems);
        dispatch({type : DECREASE_QUANTITY, payload : {filteredItems, payment} });
        payment = 0;
    }
}

export const removeItem = (selectedItem,items_in_cart) => {
    return (dispatch) => {
        const filteredItems = items_in_cart.filter(item => {
             return selectedItem.item.name !== item.item.name
        });
        dispatch({type : REMOVE_ITEM, payload : {filteredItems, payment : selectedItem.quantity*selectedItem.item.price} })
    }
}