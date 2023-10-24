import axios from "axios";

export const getAllFacility = async () => {
    try {
        let response = await axios.get("http://localhost:8080/facility");
        return response.data;
    } catch (e){
        alert("Error!")
    }
}