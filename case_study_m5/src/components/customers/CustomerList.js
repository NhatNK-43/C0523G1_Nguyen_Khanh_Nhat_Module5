import {useEffect, useState} from "react";
import * as customerService from "../../service/customer_service";
import {Link, NavLink} from "react-router-dom";
import {ModalDeleteCustomer} from "./ModalDeleteCustomer";
import SweetAlert2 from "react-sweetalert2";

export function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [idDelete, setIdDelete] = useState();
    const [nameDelete, setNameDelete] = useState();
    const [nameSearch, setNameSearch] = useState("");
    const [addressSearch, setAddressSearch] = useState("");
    const [number, setNumber] = useState(10);
    const [totalPage, setTotalPage] = useState([]);
    const [page, setPage] = useState(1);
    // const [swalProps, setSwalProps] = useState({});


    useEffect(() => {
        getAll();
    }, [nameSearch, addressSearch, page, number])


    const getAll = async () => {
        const res = await customerService.pageCustomer(nameSearch, addressSearch, page, number);
        const totalP = totalPageArray(Math.ceil(res.headers["x-total-count"]/number));
        setTotalPage(totalP);
        setCustomers(res.data);
    }

    const totalPageArray = (totalP)=>{
        const arr = [];
        for (let i=0; i<totalP; i++){
            arr[i] = i+1;
        }
        return arr;
    }

    const showModal = (id, name) => {
        setIdDelete(id);
        setNameDelete(name);
    }

    // if (!customers) {
    //     return null;
    // }
    // const handleClick = ()=> {
    //     setSwalProps({
    //         show: true,
    //         icon: "success",
    //         title: 'Example',
    //         text: 'Hello World',
    //     })
    // }
    if(!totalPage){
        return null;
    }

    return (
        <>
            <div className="body container shadow pb-1">
                <div className="d-flex pt-3 mb-3 ">
                    <NavLink
                        to="/customers/create"
                        className="btn btn-sm btn-primary rounded-0"
                    >
                        Create customer
                    </NavLink>
                    <input className="form-control-sm rounded-0 border-1 w-25 ms-3" placeholder="Search name..."
                           name="nameSearch"
                           onChange={(event) => setNameSearch(event.target.value)}/>

                    <input className="form-control-sm rounded-0 border-1 w-25 ms-3" placeholder="Search address..."
                           name="addressSearch"
                           onChange={(event) => setAddressSearch(event.target.value)}/>
                </div>
                <div id="fix-tbody">
                    <table className="table table-hover border mb-0">
                        <thead className="table-primary">
                        <tr>
                            <th scope="col" className="">#</th>
                            <th scope="col" className="">Name</th>
                            <th scope="col" className="">Date of birth</th>
                            <th scope="col" className="">Gender</th>
                            <th scope="col" className="">Address</th>
                            <th scope="col" className="">Customer type</th>
                            <th scope="col" className="text-center">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            customers.length !== 0 ? customers.map((customer, index) => (
                                <tr key={customer.id}>
                                    <td>{index + 1}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.dateOfBirth}</td>
                                    <td>{customer.gender === 1 ? "Nam" : "Nữ"}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.customerType.name}</td>
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
                            )) : <tr>
                                <td colSpan="7" className="text-danger">
                                    Not found customer
                                    {
                                        nameSearch !== "" && <span> named: <b>{nameSearch}</b></span>
                                    }
                                    {
                                        nameSearch !== "" && addressSearch !== "" && <span> and </span>
                                    }
                                    {
                                        addressSearch !== "" && <span>address: <b>{addressSearch}</b></span>
                                    }
                                </td>
                            </tr>
                        }
                        </tbody>
                    </table>
                </div>
                <div className="">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end">
                            <li className="page-item">
                                <button className={`page-link rounded-0 ${page<=1?"disabled":""}`} aria-label="Previous" onClick={()=>setPage(1)}>
                                    <small aria-hidden="true">&lt;&lt;</small>
                                </button>
                            </li>
                            <li className="page-item">
                                <button className={`page-link rounded-0 ${page<=1?"disabled":""}`} onClick={()=>setPage(page-1)}  aria-label="Previous">
                                    <span aria-hidden="true">&lt;</span>
                                </button>
                            </li>
                            {
                                totalPage.map(index =>{
                                    return(
                                        <li className="page-item" key={index}>
                                            <button className={`page-link ${page===index?"active":""}`} id="page-number" onClick={()=>setPage(index)}>{index}</button>
                                        </li>
                                    )
                                })
                            }

                            <li className="page-item">
                                <button className={`page-link rounded-0 ${page>=totalPage[totalPage.length-1]?"disabled":""}`} onClick={()=>setPage(page+1)} aria-label="Next">
                                    <small aria-hidden="true">&gt;</small>
                                </button>
                            </li>
                            <li className="page-item">
                                <button className={`page-link rounded-0 ${page>=totalPage[totalPage.length-1]?"disabled":""}`}
                                        onClick={()=> setPage(totalPage[totalPage.length-1])} aria-label="Next">
                                    <small aria-hidden="true">&gt;&gt;</small>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <ModalDeleteCustomer
                setCustomers={setCustomers}
                idDelete={idDelete}
                nameDelete={nameDelete}
            />
            {/*<div>*/}
            {/*    <button className="btn btn-sm btn-success" onClick={handleClick}>*/}
            {/*        Alert*/}
            {/*    </button>*/}
            {/*    <SweetAlert2 {...swalProps}*/}
            {/*                 didOpen={() => {*/}
            {/*                     // run when swal is opened...*/}
            {/*                 }}*/}
            {/*                 didClose={() => {*/}
            {/*                     // run when swal is closed...*/}
            {/*                 }}*/}
            {/*                 onConfirm={result => {*/}
            {/*                     // run when clieked in confirm and promise is resolved...*/}
            {/*                 }}*/}
            {/*                 onError={error => {*/}
            {/*                     // run when promise rejected...*/}
            {/*                 }}*/}
            {/*                 onResolve={result => {*/}
            {/*                     // run when promise is resolved...*/}
            {/*                 }}*/}
            {/*    />*/}
            {/*</div>*/}
        </>
    )
}