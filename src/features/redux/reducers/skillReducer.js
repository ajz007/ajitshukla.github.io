//import { getAllBackendSkills } from "../actions/skillActions";
import {backendSkills} from '../../../mock/mockSkills'

const initialState = [
{
    "id": 1,
    "name": "Java",
    "expertise": "NA",
    "measure": 1.00, //  rate yourself 8.5/10
    "relevantExp": 1, // relevant experience
    "relevantExpType": {
        "type": "string",
        "enum": ["days", "months", "years"]
    },//years, months, days
    "versions": ["JAVA 7", "JAVA 8"]
}
]

export default function skillReducer(state = initialState, action) {

    switch (action.type) {
        case "INITIATE": return [...state];
        case "BACKEND_SKILLS": return backendSkills;
        default: return state;
    }

}