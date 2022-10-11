import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    "status": "init",
    "payload": []
}

export const projectsSlice = createSlice(
    { 
        name: 'myprojects', 
        initialState,
        reducers : {
            load : (state) => {
                state.status = "loading";
                state.payload = [];    
            },
            getUsersError : (state) => state,
            getUsersSuccess : (state, action) => {
                state.status = action.payload.status;
                state.payload = action.payload.payload;
            }
        }
}
)

export const { load, getUsersError, getUsersSuccess } = projectsSlice.actions;
export default projectsSlice.reducer;