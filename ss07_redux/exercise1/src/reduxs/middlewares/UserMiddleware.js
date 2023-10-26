import * as userService from "../../services/user_service"
import {DELETE, GET_ALL} from "../ActionType";

export const getAll = () => async (dispatch) => {
    const data = await userService.getAll();
    dispatch({
        type: GET_ALL,
        payload: data
    })
};

// export const addStudent = (value) => async (dispatch) => {
//     const res = await userService.createNewStudent(value);
//     if (res.status === 200) {
//         dispatch({
//             action: CREATE,
//             payload: value
//         })
//     }
// }

export const remove = (id) => async (dispatch) => {
    const res = await userService.remove(id);
    if (res === 200) {
        dispatch({
            type: DELETE,
            payload: id
        })
    }
}

