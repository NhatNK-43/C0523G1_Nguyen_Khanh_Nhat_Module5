import {useEffect, useState} from "react";
import * as customerService from "../../service/customer_service";
import {NavLink} from "react-router-dom";
import {ModalDeleteCustomer} from "./ModalDeleteCustomer";
export function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [idDelete, setIdDelete] = useState();
    const [nameDelete, setNameDelete] = useState();
    useEffect(() => {
        getAll();
    }, [])

    const getAll = async () => {
        const data = await customerService.getAllCustomer();
        setCustomers(data);
    }

    const showModal = (id, name) => {
        setIdDelete(id);
        setNameDelete(name);
    }

    if(!customers){
        return null;
    }

    return (
        <>
            <div className="body container-fluid">
                <div>
                    <NavLink
                        to="/customers/create"
                        className="btn btn-sm btn-primary mt-3 mb-3 rounded-0"
                    >
                        Create customer
                    </NavLink>
                </div>
                <div>
                    <table className="table table-hover border">
                        <thead className="table-primary">
                        <tr>
                            <th scope="col" className="">#</th>
                            <th scope="col" className="">Name</th>
                            <th scope="col" className="">Date of birth</th>
                            <th scope="col" className="">Gender</th>
                            {/*<th>Id Card</th>*/}
                            {/*<th>Phone Number</th>*/}
                            {/*<th>Email</th>*/}
                            <th scope="col" className="">Address</th>
                            <th scope="col" className="">Customer type</th>
                            <th scope="col" className="text-center">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            customers.map((customer, index) => (
                                <tr key={customer.id}>
                                    <td>{index + 1}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.dateOfBirth}</td>
                                    <td>{customer.gender === 1 ? "Nam" : "Nữ"}</td>
                                    {/*<td>{customer.idCard}</td>*/}
                                    {/*<td>{customer.phoneNumber}</td>*/}
                                    {/*<td>{customer.email}</td>*/}
                                    <td>{customer.address}</td>
                                    <td>{customer.customerType.name}</td>
                                    <td className="text-center">
                                        <NavLink to={`/customers/update/${customer.id}`} className="btn btn-sm btn-outline-primary me-4 rounded-0">Update</NavLink>
                                        <button className="btn btn-sm btn-outline-danger rounded-0"
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop"
                                                onClick={() => showModal(customer.id, customer.name)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalDeleteCustomer
                setCustomers={setCustomers}
                idDelete={idDelete}
                nameDelete={nameDelete}
            />
        </>
    )
}