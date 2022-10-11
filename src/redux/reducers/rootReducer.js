import { combineReducers } from "@reduxjs/toolkit"
import counterSlice from "../../features/counter/counterSlice";
import myDetailsSlice from "./myDetailsSlice";
import projectsSlice from "./projectsSlice";
import skillReducer from "./skillReducer";


const  rootReducer = combineReducers({
    skills: skillReducer,
    counter: counterSlice,
    myDetails: myDetailsSlice,
    myProjects: projectsSlice,
}
);

export default rootReducer;