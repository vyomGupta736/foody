import {
    LOCATION_TRIED,
    LOCATION_SUCCESS,
    LOCATION_FAIL,
} from './types';

import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import axios from 'axios';

const instance = axios.create({
  baseURL : 'https://radiant-sierra-75444.herokuapp.com/',
  headers : {
      Authorization : 'vyom',
    }
});

export const autoLocation = () => {
  return (dispatch) => {
      doFindAutoLocation(dispatch);
  }
};

const doFindAutoLocation = async (dispatch) => {
    const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    console.log(result);
    if(result === 'granted')
    {
       dispatch({type : LOCATION_TRIED});
       Geolocation.getCurrentPosition(
        async (position) => {
           console.log(position);
           dispatch({type : LOCATION_SUCCESS, payload : position});
         },
          (error) => {
           // See error code charts below.
           console.log(error.code, error.message);
           dispatch({type : LOCATION_FAIL});
         },
         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      )
    }else
    {
        dispatch({type : LOCATION_FAIL});
    }
}