
import {ErrorMessage, Form, Field, Formik } from "formik";
import * as Yup from "yup";

export function ContactForm() {
    const initValue = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };
    const validateObject = {
        name: Yup.string()
            .required(),
        email: Yup.string()
            .required()
            .matches( /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"The email entered is invalid!"),
        phone: Yup.string()
            .required()
            .matches(/^0\\d{9}$/,"The phone number entered is invalid!")
    }
    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={values => {
                }}
                validationSchema={Yup.object(validateObject)}
            >
                <div className="w-25 m-auto">
                    <Form>
                        <h3>Contact Form</h3>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="name">Name</label>
                            <Field type="text" className="form-control" id="name" name="name"/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="email">Email</label>
                            <Field type="text" className="form-control" id="email" name="email"/>
                            <ErrorMessage name="email" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="phone">Phone</label>
                            <Field type="text" className="form-control" id="phone" name="phone"/>
                            <ErrorMessage name="phone" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="message">Message</label>
                            <Field type="text" className="form-control h-100" id="message" name="message"/>
                            <ErrorMessage name="message" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
    )
}