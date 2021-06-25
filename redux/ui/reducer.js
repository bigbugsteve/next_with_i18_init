import * as actionTypes from './actions';


  let initialState = {
    isLoading: false,
  };
  
  export default function uiReducer(state = initialState, action) {
    switch (action.type) {
      case actionTypes.SET_LOADER:
        return{
          ...state,
          isLoading: action.val,
        }
      default:
        return state;
    }
}