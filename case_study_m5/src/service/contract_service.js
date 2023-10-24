import axios from "axios";

export const getAll = async () =>{
    try {
        const res = await axios.get('http://localhost:8080/contract');
        return res.data;
    } catch (e){
        alert("Error!")
    }
}