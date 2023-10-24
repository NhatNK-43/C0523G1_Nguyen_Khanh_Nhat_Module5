import axios from "axios";

export const getAllPost = async () =>{
    try {
        let response = await axios.get("http://localhost:8080/posts");
        return response.data;
    } catch (e){

    }
}