import { combineReducers } from "@reduxjs/toolkit"
import skillReducer from "./skillReducer";


const  rootReducer = combineReducers(
    skillReducer
);

export default rootReducer;