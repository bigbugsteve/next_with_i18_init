import * as actionTypes from './actions';
import cookie from 'react-cookies';

const data=cookie.load("data");


  let initialState = {
    userData: data,
  };
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case actionTypes.SET_USER_DATA:
        return{
          ...state,
          userData: action.val,
        }
      default:
        return state;
    }
}