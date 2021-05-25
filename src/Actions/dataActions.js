import { DATA_FOUND_SUCCESS, DATA_NOT_FOUND, SELECTED_ITEM } from './types';
import axios from 'axios';

export const instance = axios.create({
    baseURL : 'https://radiant-sierra-75444.herokuapp.com/',
    headers : {
        Authorization : 'vyom',
    }
});

export const findData = () => {
    console.log("i have been called");
    return async (dispatch) => {
        try{
            console.log("trying");
            const response = await instance.get("/showItems");
            console.log(response);
            if(response.data.length >=1)
            {
              dispatch({type : DATA_FOUND_SUCCESS, payload : response.data});
            }
          }catch(err)
          {
              console.log(err);
              dispatch({type : DATA_NOT_FOUND});
          }
    }
};

export const selectItem = (item) => {
    console.log("from actions")
    console.log(item);
    return {
        type : SELECTED_ITEM, payload : item
    }
}