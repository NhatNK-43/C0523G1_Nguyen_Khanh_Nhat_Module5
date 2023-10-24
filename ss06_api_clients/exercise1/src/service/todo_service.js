import axios from "axios";

export const getAllTodo = async ()=>{
    try {
        let response = await axios.get("http://localhost:8080/todos");
        return response.data;
    } catch (e){
        alert("Error show list!")
    }
}

export const createTodo = async (values) => {
    try {
        let response = await axios.post("http://localhost:8080/todos",values);
        return response;
    } catch (e){
        alert("Error create!")
    }
}