import * as customerService from "../../service/customer_service"
import * as customerTypeService from "../../service/customer_type_service"
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";

export function CustomerUpdate() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState();
    const [customerTypes, setCustomerTypes] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getAllCustomerType();
    }, []);

    useEffect(() => {
        getCustomerById();
        // getAllCustomerType();
    }, [id]);

    const getCustomerById = async () => {
        let data = await customerService.getCustomerById(id);
        // res.customerType = res.customerType + "";
        data.gender = data.gender + "";
        setCustomer(data);
        // console.log(res);
    }

    const getAllCustomerType = async () => {
        let data = await customerTypeService.getAllCustomerType();
        setCustomerTypes(data);
    }

    if (!customer || !customerTypes) {
        return null;
    }

    const initValue = {

        // name: customer.name,
        //
        // customerType: customer.customerType.id,
        // ...customer
        address: customer.address,
        customerType: customer.customerType.id,
        dateOfBirth: customer.dateOfBirth,
        email: customer.email,
        gender: customer.gender,
        idCard: customer.idCard,
        name: customer.name,
        phoneNumber: customer.phoneNumber,
        id: customer.id
    };

    const update = async (values) => {
        // values.customerType = +values.customerType;
        values.gender = +values.gender;
        let status = await customerService.updateCustomer(values);
        if (status === 200) {
            toast.success("Update successfully!");
            navigate("/customers");
        } else {
            toast.error("Update failed!");
            navigate("/customers/update/" + values.id);
        }
    }

    return (
        <>
            <div className="body">
                <div className="row m-0 pt-5">
                    <div className="col-md-3"/>
                    <div className="col-md-6 shadow p-0">
                        <div className="form-control p-5 rounded-0">
                            <div className="mb-5">
                                <h2 className="text-primary">Update Customer</h2>
                            </div>
                            <Formik
                                initialValues={initValue}
                                onSubmit={values => {
                                    update(values);
                                }}>
                                <Form>
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="form-label col-sm-3">
                                            Name
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="text" id="name" name="name" className="form-control"
                                                   required=""/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="dateOfBirth" className="form-label col-sm-3">
                                            Date of birth
                                        </label>
                                        <div className="col-sm-9">
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
                                        <label className="form-label col-sm-3">
                                            Gender
                                        </label>
                                        <div className="col-sm-9">
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
                                                <label className="form-check-label"
                                                       htmlFor="inlineRadio2">Female</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="idCard" className="form-label col-sm-3">
                                            Id card
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="text" id="idCard" name="idCard" className="form-control"
                                                   required=""/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="phoneNumber" className="form-label col-sm-3">
                                            Phone number
                                        </label>
                                        <div className="col-sm-9">
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
                                        <label htmlFor="email" className="form-label col-sm-3">
                                            Email
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="email" id="email" name="email" className="form-control"
                                                   required=""/>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="address" className="form-label col-sm-3">
                                            Address
                                        </label>
                                        <div className="col-sm-9">
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
                                        <label htmlFor="customerType" className="form-label col-sm-3">
                                            Customer type
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                className="form-select"
                                                aria-label="Default select example"
                                                name="customerType"
                                                id="customerType"
                                                required=""
                                            >
                                                {
                                                    customerTypes.map((customerType) => (
                                                        <option value={customerType.id}
                                                                key={customerType.id}>
                                                            {customerType.name}</option>
                                                    ))
                                                }
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label className="form-label col-sm-3"/>
                                        <div className="col-sm-9">
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