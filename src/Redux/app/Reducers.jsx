import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    appIntro: undefined,
    

}

const appReducer = createSlice({
    name: 'app',
    initialState,
    reducers: {
      saveIntroDone: (state, action) => {
        state.appIntro = action.payload;
      },
      
      
    },
  });
  
  export const {
    saveIntroDone,
  } = appReducer.actions;
  
  export default appReducer.reducer;