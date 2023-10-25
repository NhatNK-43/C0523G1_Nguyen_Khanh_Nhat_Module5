import axios from "axios";

const URL_USERS = "http://localhost:8080/users"

export const getAll = async () => {
    try {
        let res =await axios.get(URL_USERS);
        return res.data;
    }catch (e) {

    }
};

export const remove = async(id) =>{
    try {
        const res = await axios.delete(`http://localhost:8080/users/${id}`);
        return res.status;
    } catch (error) {
        console.log("error");
    }
}

