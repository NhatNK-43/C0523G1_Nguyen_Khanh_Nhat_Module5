import axios from "axios";

export const getAllCustomer = async () =>{
    try {
        const response = await axios.get('http://localhost:8080/customer');
        return response.data;
    } catch (e){
        alert("Error!")
    }
}