import {useEffect, useState} from "react";
import * as todoService from "../service/todo_service"
import {Formik, Form, Field} from "formik";
import {useNavigate} from 'react-router-dom'
import {toast} from "react-toastify";

export function Todo() {
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getAll();
    }, [])

    const getAll = async () => {
        let response = await todoService.getAllTodo();
        setTodos(response);
    }

    const initValue = {
        userId: 2,
        title: "",
        completed: "false",
    }

    const create = async (values) => {
        let todo = await todoService.createTodo(values);
        console.log(todo);
        if (todo.status === 201){
            toast.success("Submit successfully!");
            navigate("/");
        } else {
            toast.error("Submit failed!")
        }
    }
    if (!todos){
        return null;
    }
    return (
        <>
            <div className="container mt-5">
                <div className="form-control w-50 m-auto">
                    <h3>Todo List</h3>
                    <Formik
                        initialValues={initValue}
                        onSubmit={values => {
                            create(values);
                        }}>
                        <Form>
                            <Field className="form-control mt-3" name="title"/>
                            <button className="btn btn-sm btn-primary mt-3 w-100" type="submit">Submit</button>
                        </Form>
                    </Formik>
                    <ul className="mt-3">
                        {
                            todos.map((todo) => (
                                <li key={todo.id}>{todo.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}