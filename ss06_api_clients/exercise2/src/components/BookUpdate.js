import {Formik, Field, Form} from 'formik';
import * as postService from "../service/post_service"
import {toast} from "react-toastify";
import {useNavigate, useParams} from 'react-router-dom'
import {useEffect, useState} from "react";

export function BookUpdate() {
    const navigate = useNavigate();
    const [book, setBook] = useState();
    const {id} = useParams();

    useEffect(() =>{
        getById();
    },[id])

    const getById = async () =>{
        let response = await postService.getBookById(id);
        setBook(response);
    }

    if(!book){
        return null
    }

    const initValue = {
        ...book
    }

    const update = async (value) => {
        let bookStatus = await postService.updateBook(value);
        if (bookStatus===200){
            toast.success("Update successfully!");
            navigate("/")
        } else {
            toast.error("Update failed");
            navigate("/update")
        }
    }

    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={ values => {
                    update(values);
                }}
            >
                <Form>
                   <div className="form-control w-25 m-auto mt-5">
                       <h3 className="mb-5">Update Book</h3>
                       <label className="form-label" htmlFor="title">Title</label>
                       <Field className="form-control mb-3" id="title" type="text" name="title"/>
                       <label className="form-label" htmlFor="quantity">Quantity</label>
                       <Field className="form-control mb-3" id="quantity" type="number" name="quantity"/>
                       <button className="btn btn-sm btn-primary" type="submit">Save changes</button>
                   </div>
                </Form>
            </Formik>
        </>
    )
}