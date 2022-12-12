import { combineReducers } from '@reduxjs/toolkit';
import user from './userSlice';
import stores from "../main/storePage/store"
import menu from "../main/menuPage/store"

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    user,
    stores,
    menu,
    ...asyncReducers
  });

  /*
  Reset the redux store when user logged out
   */
  if (action.type === 'user/userLoggedOut') {
    // state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;