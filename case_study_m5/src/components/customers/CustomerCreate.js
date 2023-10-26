import * as customerService from "../../service/customer_service"
import {NavLink, useNavigate} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {toast} from "react-toastify";

export function CustomerCreate() {
    const navigate = useNavigate();

    const initValue = {
        name: "",
        dateOfBirth: "",
        gender: "1",
        idCard: "",
        phoneNumber: "",
        email: "",
        address: "",
        customerType: {
            id: 1,
            name: "Member"
        }
    }

    const create = async (values) => {
        values.gender = +values.gender;
        let status = await customerService.createCustomer(values);
        if (status === 201) {
            toast.success("Create successfully!");
            navigate("/customers");
        } else {
            toast.error("Create failed!");
            navigate("/customers/create");
        }
    }

    return (
        <>
            <div className="body">
                <div className="row pt-5 m-0">
                    <div className="col-md-3"/>
                    <div className="col-md-6">
                        <div className="form-control p-3 rounded-0">
                            <div className="mb-3">
                                <h2 className="text-primary">Create Customer</h2>
                            </div>
                            <Formik
                                initialValues={initValue}
                                onSubmit={values => {
                                    create(values);
                                }}>
                                <Form>
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="form-label col-sm-2">
                                            Name
                                        </label>
                                        <div className="col-sm-10">
                                            <Field type="text" id="name" name="name" className="form-control" required=""/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="dateOfBirth" className="form-label col-sm-2">
                                            Date of birth
                                        </label>
                                        <div className="col-sm-10">
                                            <Field
                                                type="date"
                                                id="dateOfBirth"
                                                name="dateOfBirth"
                                                className="form-control"
                                                required=""
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label className="form-label col-sm-2">
                                            Gender
                                        </label>
                                        <div className="col-sm-10">
                                            <div className="form-check form-check-inline">
                                                <Field className="form-check-input" type="radio" name="gender"
                                                       id="inlineRadio1"
                                                       value="1"/>
                                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <Field className="form-check-input" type="radio" name="gender"
                                                       id="inlineRadio2"
                                                       value="0"/>
                                                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                            </div>
                                        </div>
                                        {/*<div className="col-sm-10">*/}
                                        {/*    <select*/}
                                        {/*        className="form-select col-sm-10"*/}
                                        {/*        aria-label="Default select example"*/}
                                        {/*        name="area"*/}
                                        {/*        id="gender"*/}
                                        {/*        name="gender"*/}
                                        {/*        required=""*/}
                                        {/*    >*/}
                                        {/*        <option value="0" selected="">*/}
                                        {/*            Select*/}
                                        {/*        </option>*/}
                                        {/*        <option value="1">Male</option>*/}
                                        {/*        <option value="2">Female</option>*/}
                                        {/*        <option value="3">Other</option>*/}
                                        {/*    </select>*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="idCard" className="form-label col-sm-2">
                                            Id card
                                        </label>
                                        <div className="col-sm-10">
                                            <Field type="text" id="idCard" name="idCard" className="form-control"
                                                   required=""/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="phoneNumber" className="form-label col-sm-2">
                                            Phone number
                                        </label>
                                        <div className="col-sm-10">
                                            <Field
                                                type="text"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                className="form-control"
                                                required=""
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="email" className="form-label col-sm-2">
                                            Email
                                        </label>
                                        <div className="col-sm-10">
                                            <Field type="email" id="email" name="email" className="form-control"
                                                   required=""/>
                                        </div>
                                    </div>
                                    {/*<div className="row mb-3">*/}
                                    {/*    <label htmlFor="customerType" className="form-label col-sm-2">*/}
                                    {/*        Customer type*/}
                                    {/*    </label>*/}
                                    {/*    <div className="col-sm-10">*/}
                                    {/*        <select*/}
                                    {/*            className="form-select col-sm-10"*/}
                                    {/*            aria-label="Default select example"*/}
                                    {/*            name="area"*/}
                                    {/*            id="customerType"*/}
                                    {/*            required=""*/}
                                    {/*        >*/}
                                    {/*            <option value="" selected="">*/}
                                    {/*                Select*/}
                                    {/*            </option>*/}
                                    {/*            <option>Member</option>*/}
                                    {/*            <option>Silver</option>*/}
                                    {/*            <option>Gold</option>*/}
                                    {/*            <option>Platinum</option>*/}
                                    {/*            <option>Diamond</option>*/}
                                    {/*        </select>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    <div className="row mb-3">
                                        <label htmlFor="address" className="form-label col-sm-2">
                                            Address
                                        </label>
                                        <div className="col-sm-10">
                                            <Field
                                                type="text"
                                                id="address"
                                                name="address"
                                                className="form-control"
                                                required=""
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label className="form-label col-sm-2"/>
                                        <div className="col-sm-10">
                                            <NavLink
                                                to="/customers"
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