import { combineReducers } from "@reduxjs/toolkit"
import counterSlice from "../../features/counter/counterSlice";
import myDetailsSlice from "./myDetailsSlice";
import skillReducer from "./skillReducer";


const  rootReducer = combineReducers({
    skills: skillReducer,
    counter: counterSlice,
    myDetails: myDetailsSlice
}
);

export default rootReducer;