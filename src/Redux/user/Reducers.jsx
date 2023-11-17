import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    userInfo: undefined,
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwNTA0NDE0LCJpYXQiOjE3MDAyNDUyMTQsImp0aSI6IjQ2MWIyNTU0YjA3ZDRiZjg5MWU5ZGRiYzMyYzMyMzE4IiwidXNlcl9pZCI6MX0.EZep-TBMHes9p0P4lgTMYhFxUBcDWWwhAKSCMDT_yAA",
    

}

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducer: {
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