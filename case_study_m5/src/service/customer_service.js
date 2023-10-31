import axios from "axios";

const ULR_CUSTOMER = "http://localhost:8081/customers";
export const getAllCustomer = async (name, id) => {
    try {
        // const res = await axios.get(ULR_CUSTOMER+`?name=${name}&customerTypeId=${id}`);
        const res = await axios.get(ULR_CUSTOMER +
            (name === "" && id === 0 ? ""
                : id === 0 ? `?nameSearch=${name}`
                    : `?nameSearch=${name}&customerTypeId=${id}`));
        return res.data;
    } catch (e) {
        alert("Error!")
    }
}

// export const getAllCustomer = async (name, address) =>{
//     try {
//         const res = await axios.get(ULR_CUSTOMER+`?name_like=${name}&address_like=${address}`);
//         return res.data;
//     } catch (e){
//         alert("Error!")
//     }
// }

// export const pageCustomer = async (name, address, page, number)=>{
//     try {
//         return  await axios.get(ULR_CUSTOMER+`?name_like=${name}&address_like=${address}&_page=${page}&_limit=${number}`);
//
//     } catch (e){
//         alert("Error!")
//     }
// }
export const createCustomer = async (values) => {
    try {
        const res = await axios.post(ULR_CUSTOMER, values);
        return res.status;
    } catch (e) {
        alert("Error!")
    }
}

export const getCustomerById = async (id) => {
    try {
        const res = await axios.get(`${ULR_CUSTOMER}${id}`);
        return res.data;
    } catch (e) {
        alert("Error!")
    }
};

export const updateCustomer = async (values) => {
    try {
        const res = await axios.patch(`${ULR_CUSTOMER}${values.id}`, values);
        return res.status;
    } catch (e) {
        alert("Error!")
    }
};

export const deleteCustomer = async (id) => {
    try {
        const res = await axios.delete(`${ULR_CUSTOMER}${id}`);
        return res.status;
    } catch (e) {
        alert("Error!")
    }
}
