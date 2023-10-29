import {NavLink, useNavigate} from "react-router-dom";
import * as contractService from "../../service/contract_service";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useState} from "react";
import * as events from "events";

export default function ContractCreate (){
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const initValue = {
        contractCode: "",
        startDate: "",
        endDate: "",
        deposit: "0",
        totalPayment: "0"
    }

    const d = new Date();
    const date = (d.getFullYear()) + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    // if (!startDate&&!endDate){
    // }

    const validateObject = {
        contractCode: Yup.string()
            .required("Please enter your full name")
            .matches(/^HD-[0-9]{4}$/,"The contract code entered is invalid"),
        startDate: Yup.date()
            .required("Please enter start date")
            .min(date, "The start date cannot be less than the current date"),
            // .max(Yup.ref("endDate"), "The start date cannot be less than the end date"),
        endDate: Yup.date()
            .required("Please enter end date")
            .min(Yup.ref("startDate"), "The end date cannot be less than the start date"),
        deposit: Yup.number()
            .min(0, "The deposit must be greater than or equal to 0"),
        totalPayment: Yup.number()
            .required("Please enter total payment")
            .min(0, "The total payment must be greater than or equal to 0")
    }
    const create = async (values) => {
        let status = await contractService.createContract(values);
        if (status === 201) {
            toast.success("Create successfully!");
            navigate("/contracts");
        } else {
            toast.error("Create failed!");
            navigate("/contract/create");
        }
    }

    return (
        <>
            <div className="body">
                <div className="row pt-5 m-0">
                    <div className="col-md-3"/>
                    <div className="col-md-6 shadow p-0">
                        <div className="form-control p-5 rounded-0">
                            <div className="mb-5">
                                <h2 className="text-primary">Create Contract</h2>
                            </div>
                            <Formik
                                initialValues={initValue}
                                onSubmit={values => {
                                    create(values);
                                }}
                                validationSchema={Yup.object(validateObject)}
                            >
                                <Form>
                                    <div className="row mb-3">
                                        <label htmlFor="contractCode" className="form-label col-sm-3">
                                            Contract code
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="text" id="contractCode" name="contractCode" className="form-control"/>
                                            <ErrorMessage name="contractCode" component="div" className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="startDate" className="form-label col-sm-3">
                                            Start date
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                type="date"
                                                id="startDate"
                                                name="startDate"
                                                className="form-control"
                                            />
                                            <ErrorMessage name="startDate" component="div" className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="endDate" className="form-label col-sm-3">
                                            End date
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                type="date"
                                                id="endDate"
                                                name="endDate"
                                                className="form-control"
                                                
                                            />
                                            <ErrorMessage name="endDate" component="div" className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="deposit" className="form-label col-sm-3">
                                            Deposit
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                type="number"
                                                id="deposit"
                                                name="deposit"
                                                className="form-control"
                                            />
                                            <ErrorMessage name="deposit" component="div" className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="totalPayment" className="form-label col-sm-3">
                                            Total payment
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                type="number"
                                                id="totalPayment"
                                                name="totalPayment"
                                                className="form-control"
                                            />
                                            <ErrorMessage name="totalPayment" component="div" className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label className="form-label col-sm-3"/>
                                        <div className="col-sm-9">
                                            <NavLink
                                                to="/contracts"
                                                className="btn btn-sm btn-secondary me-4 rounded-0"
                                            >
                                                Back
                                            </NavLink>
                                            <button type="submit" className="btn btn-sm btn-primary rounded-0">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                        <div className="col-md-3"/>
                    </div>
                </div>
            </div>
        </>
    )
}