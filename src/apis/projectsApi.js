import { projects } from '../mock/mockProjects';
import { load, getUsersSuccess } from '../redux/reducers/projectsSlice';


export async function getMyProjects(dispatch) {
    dispatch(load());

    let projects = await getProjectsFromMock();
    console.log(`projects = ${projects}`)
    console.log(`projects.type = ${projects.type}`)
    console.log(`projects.status = ${projects.status}`)
    console.log(`projects.payload = ${projects.payload}`)
    dispatch(getUsersSuccess(projects));

}

function getProjectsFromMock() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ "status": "success", "payload": projects })
        }
            , 2000);
    });
}