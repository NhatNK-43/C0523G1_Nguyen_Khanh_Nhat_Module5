import {NavLink, useNavigate, useParams} from "react-router-dom";
import * as contractService from "../../service/contract_service";
import {toast} from "react-toastify";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";

export default function ContractUpdate(){
    const navigate = useNavigate();
    const [contract, setContract] = useState();
    const {id} = useParams();

    useEffect( () => {
        getContractById();
    }, [id]);

    const getContractById = async () => {
        let data = await contractService.getContractById(id);
        data.deposit = data.deposit +"";
        data.totalPayment = data.totalPayment +"";
        setContract(data);
    }

    if(!contract){
        return null;
    }

    const initValue = {
        ...contract
    }

    const update = async (values) => {
        console.log(values)
        values.deposit = +values.deposit;
        values.totalPayment = +values.totalPayment;
        let status = await contractService.updateContract(values);
        if (status === 200) {
            toast.success("Update successfully!");
            navigate("/contracts");
        } else {
            toast.error("Update failed!");
            navigate(`/contracts/update/${values.id}`);
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
                                <h2 className="text-primary">Update Contract</h2>
                            </div>
                            <Formik
                                initialValues={initValue}
                                onSubmit={values => {
                                    update(values);
                                }}>
                                <Form>
                                    <div className="row mb-3">
                                        <label htmlFor="contractCode" className="form-label col-sm-3">
                                            Contract code
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="text" id="contractCode" name="contractCode" className="form-control" required=""/>
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
                                                required=""
                                            />
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
                                                required=""
                                            />
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
                                                required=""
                                            />
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
                                                required=""
                                            />
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