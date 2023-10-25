import {Formik, Field, Form} from 'formik';
import * as postService from "../service/post_service"
import {toast} from "react-toastify";
import {useNavigate} from 'react-router-dom'

export function BookCreate() {
    const navigate = useNavigate();
    const initValue = {
        title: "",
        quantity: ""
    }

    const create = async (value) => {
        let bookStatus = await postService.createBook(value);
        if (bookStatus===201){
            toast.success("Add successfully!");
            navigate("/");
        } else {
            toast.error("Add failed");
            navigate("/create");
        }
    }

    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={ values => {
                    create(values);
                }}
            >
                <Form>
                   <div className="form-control w-25 m-auto mt-5">
                       <h3 className="mb-5">Add a new Book</h3>
                       <label className="form-label" htmlFor="title">Title</label>
                       <Field className="form-control mb-3" id="title" type="text" name="title"/>
                       <label className="form-label" htmlFor="quantity">Quantity</label>
                       <Field className="form-control mb-3" id="quantity" type="number" name="quantity"/>
                       <button className="btn btn-sm btn-success">Add</button>
                   </div>
                </Form>
            </Formik>
        </>
    )
}