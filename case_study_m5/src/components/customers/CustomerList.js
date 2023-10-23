import {useEffect, useState} from "react";
import {getAll} from "../../service/customer_service";
export function CustomerList(){
    const [customer, setCustomer] = useState([]);
    useEffect(()=>{
        display();
    },[])
    const display = async () => {
        const res = await getAll()
        setCustomer(res)
    }
    return(
        <>
            <div id="header">
                <h1>Customer</h1>
            </div>
            <div className="container-fluid">
                <div>
                    <a
                        role="button"
                        className="btn btn-sm btn-primary mt-3 mb-3"
                    >
                        Create customer
                    </a>
                </div>
                <div>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Date of birth</th>
                            <th>Gender</th>
                            <th>Id Card</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Customer type</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            customer.map((customer,index)=>(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.dateOfBirth}</td>
                                    <td>{customer.gender}</td>
                                    <td>{customer.idCard}</td>
                                    <td>{customer.phoneNumber}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.customerType.name}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}