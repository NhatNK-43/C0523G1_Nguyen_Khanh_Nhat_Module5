import * as userService from "../../services/user_service"
import {GET_ALL} from "../ActionType";

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

