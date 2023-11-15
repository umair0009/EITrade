import userReducer from './user/Reducers'
import appReducer from './app/Reducers'
import { combineReducers } from '@reduxjs/toolkit';



const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer,
    // Add other reducers here
  });
  
  export default rootReducer;
