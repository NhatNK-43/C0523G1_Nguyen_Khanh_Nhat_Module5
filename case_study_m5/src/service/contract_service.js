import axios from "axios";
const URL_CONTRACT = "http://localhost:8080/contracts"
export const getAllContract = async (contractCodeSearch) => {
    try {
        const res = await axios.get(URL_CONTRACT+`?contractCode_like=${contractCodeSearch}`);
        return res.data;
    } catch (e){
        alert("Error!")
    }
}
export const createContract = async (values) =>{
    try {
        const res = await axios.post(URL_CONTRACT, values);
        return res.status;
    } catch (e){
        alert("Error!")
    }
}

export const getContractById = async (id) =>{
    try {
        const res = await axios.get(URL_CONTRACT+`/${id}`);
        return res.data;
    } catch (e){
        alert("Error!")
    }
}
export const updateContract = async (values) =>{
    try {
        const res = await axios.patch(URL_CONTRACT+`/${values.id}`, values);
        return res.status;
    } catch (e){
        alert("Error!")
    }
}

export const deleteContract = async (id) =>{
    try {
        const res = await axios.delete(URL_CONTRACT+`/${id}`);
        return res.status;
    } catch (e){
        alert("Error!")
    }
}