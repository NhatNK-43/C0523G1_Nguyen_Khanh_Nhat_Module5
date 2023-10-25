import axios from "axios";

const URL_USERS = "http://localhost:8080/users"

export const getAll = async () => {
    try {
        let res =await axios.get(URL_USERS);
        return res.data;
    }catch (e) {

    }
};

