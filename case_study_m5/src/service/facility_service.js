import axios from "axios";
const URL_FACILITY = "http://localhost:8080/facilitys";
export const getAllFacility = async () => {
    try {
        let res = await axios.get(URL_FACILITY);
        return res.data;
    } catch (e){
        alert("Error!")
    }
}

export const createFacility = async (values) => {
    try {
        let res = await axios.post(URL_FACILITY, values);
        return res.status;
    } catch (e){
        alert("Error!")
    }
}