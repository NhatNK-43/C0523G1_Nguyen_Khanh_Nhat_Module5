import {useEffect, useState} from "react";
import * as customerService from "../../service/customer_service";
import {NavLink} from "react-router-dom";
import {ModalDeleteCustomer} from "./ModalDeleteCustomer";
import SweetAlert2 from "react-sweetalert2";
import * as customerTypeService from "../../service/customer_type_service";

export function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [idDelete, setIdDelete] = useState();
    const [nameDelete, setNameDelete] = useState();
    const [swalProps, setSwalProps] = useState({});
    const [customerTypes, setCustomerTypes] = useState([]);

    useEffect(() => {
        getAllCustomerType();
    }, []);
    useEffect(() => {
        getAll();
    }, [])

    const getAll = async () => {
        const data = await customerService.getAllCustomer();
        setCustomers(data);
    }
    const getAllCustomerType = async () => {
        let data = await customerTypeService.getAllCustomerType();
        setCustomerTypes(data);
    }
    const showModal = (id, name) => {
        setIdDelete(id);
        setNameDelete(name);
    }

    // if (!customers) {
    //     return null;
    // }
    const handleClick = ()=> {
        setSwalProps({
            show: true,
            icon: "success",
            title: 'Example',
            text: 'Hello World',
        })
    }

    return (
        <>
            <div className="body container shadow">
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
                                    <td>{
                                        customerTypes.map((customerType)=>{
                                            if(customer.customerType === customerType.id){
                                                return customerType.name
                                            }
                                        })
                                    }</td>
                                    <td className="text-center">
                                        <NavLink to={`/customers/update/${customer.id}`}
                                                 className="btn btn-sm btn-outline-primary me-4 rounded-0">Update</NavLink>
                                        <button className="btn btn-sm btn-outline-danger rounded-0"
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop"
                                                onClick={() => showModal(customer.id, customer.name)}
                                        >Delete
                                        </button>
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
            <div>
                <button className="btn btn-sm btn-success" onClick={handleClick}>
                    Alert
                </button>
                <SweetAlert2 {...swalProps}
                             didOpen={() => {
                                 // run when swal is opened...
                             }}
                             didClose={() => {
                                 // run when swal is closed...
                             }}
                             onConfirm={result => {
                                 // run when clieked in confirm and promise is resolved...
                             }}
                             onError={error => {
                                 // run when promise rejected...
                             }}
                             onResolve={result => {
                                 // run when promise is resolved...
                             }}
                />
            </div>
        </>
    )
}