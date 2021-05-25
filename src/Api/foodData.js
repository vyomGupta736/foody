import axios from 'axios';

export const instance = axios.create({
    baseURL : 'https://radiant-sierra-75444.herokuapp.com/',
    headers : {
        Authorization : 'vyom',
        'content-type': 'application/x-www-form-urlencoded'
    }
});