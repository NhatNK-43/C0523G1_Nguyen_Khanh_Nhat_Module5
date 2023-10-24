import {useEffect, useState} from "react";
import * as contractService from "../../service/contract_service";

export function ContractList() {
    const [contract, setContract] = useState([]);
    useEffect(()=>{
        getAll();
    },[])
    const getAll = async () => {
        const response = await contractService.getAllContract();
        setContract(response);
    }
    return (
        <>
            <div id="header">
                <h1>Contract</h1>
            </div>
            <div className="container-fluid">
                <div>
                    <a
                        role="button"
                        href="#"
                        className="btn btn-sm btn-primary mt-3 mb-3"
                    >
                        Create contract
                    </a>
                </div>
                <div>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Contract code</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Deposit</th>
                            <th>Total Payment</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            contract.map((contract,index)=>(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{contract.contractCode}</td>
                                    <td>{contract.startDate}</td>
                                    <td>{contract.endDate}</td>
                                    <td>{contract.deposit}</td>
                                    <td>{contract.totalPayment}</td>
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