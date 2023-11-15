import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    userInfo: undefined,
    accessToken: "",
    

}

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
      saveUserInfo: (state, action) => {
        state.userInfo = action.payload;
      },
      saveAccessToken: (state, action) => {
        state.accessToken = action.payload;
      },
      
    },
  });
  
  export const {
    saveUserInfo,
    saveAccessToken,
  } = userReducer.actions;
  
  export default userReducer.reducer;