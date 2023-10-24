import axios from "axios";

export const getAllContract = async () =>{
    try {
        const response = await axios.get('http://localhost:8080/contract');
        return response.data;
    } catch (e){
        alert("Error!")
    }
}