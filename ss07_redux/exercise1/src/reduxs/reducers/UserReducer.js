import {GET_ALL} from "../ActionType";

const userReducer = (users = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_ALL :
            return payload;
        // case CREATE:
        //     return [...users, payload];
        default:
            return users;
    }
}
export default userReducer;
