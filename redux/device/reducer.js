import * as actionTypes from './actions';
import cookie from 'react-cookies';

const data=cookie.load("device");


  let initialState = {
    deviceData: data,
  };
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case actionTypes.SET_DEVICE_DATA:
        return{
          ...state,
          deviceData: action.val,
        }
      default:
        return state;
    }
}