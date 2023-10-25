import axios from "axios";

export const getAllPost = async () => {
    try {
        let response = await axios.get("http://localhost:8080/posts");
        return response.data;
    } catch (e) {

    }
}

export const createBook = async (value) => {
    try {
        let response = await axios.post("http://localhost:8080/posts", value);
        return response.status;
    } catch (e) {

    }
}

export const getBookById = async (id) => {
    try {
        let response = await axios.get(`http://localhost:8080/posts/${id}`);
        return response.data;
    }catch (e) {

    }
}

export const updateBook = async (value) => {
    try {
        let response = await axios.patch(`http://localhost:8080/posts/${value.id}`, value);
        return response.status;
    } catch (e) {

    }
}

export const deleteBook  = async (id) => {
    try {
        let response = await axios.delete(`http://localhost:8080/posts/${id}`);
        return response.status;
    } catch (e) {

    }
}