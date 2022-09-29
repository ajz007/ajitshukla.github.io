import { getBackendSkills } from "../../../apis/skillsApi";

//action
export function getAllBackendSkills(){
    return {
        type:"BACKEND_SKILLS", getBackendSkills
    };
}