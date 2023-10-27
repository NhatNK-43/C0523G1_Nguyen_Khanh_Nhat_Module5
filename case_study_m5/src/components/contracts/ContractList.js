import {useEffect, useState} from "react";
import * as contractService from "../../service/contract_service";
import {NavLink} from "react-router-dom";
import {ModalDeleteContract} from "./ModalDeleteContract";

export function ContractList() {
    const [contracts, setContracts] = useState([]);
    const [idDelete, setIdDelete] = useState();
    const [contractCodeDelete, setContractCodeDelete] = useState();
    useEffect(()=>{
        getAll();
    },[])

    const getAll = async () => {
        const data = await contractService.getAllContract();
        setContracts(data);
    }

    const showModal = (id, contractCode) => {
        setIdDelete(id);
        setContractCodeDelete(contractCode);
    }

    return (
        <>
            <div className="body container shadow pb-1">
                <div>
                    <NavLink
                        to="/contracts/create"
                        className="btn btn-sm btn-primary mt-3 mb-3 rounded-0"
                    >
                        Create contract
                    </NavLink>
                </div>
                <div>
                    <table className="table table-hover border">
                        <thead className="table-primary">
                        <tr>
                            <th>#</th>
                            <th>Contract code</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Deposit</th>
                            <th scope="col" className="col-2">Total payment</th>
                            <th scope="col" className="text-center col-2">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            contracts.map((contract,index)=>(
                                <tr key={contract.id}>
                                    <td>{index+1}</td>
                                    <td>{contract.contractCode}</td>
                                    <td>{contract.startDate}</td>
                                    <td>{contract.endDate}</td>
                                    <td>{contract.deposit}</td>
                                    <td>{contract.totalPayment}</td>
                                    <td className="text-center">
                                        <NavLink to={`/contracts/update/${contract.id}`}
                                                 className="btn btn-sm btn-outline-primary me-4 rounded-0">Update</NavLink>
                                        <button className="btn btn-sm btn-outline-danger rounded-0"
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#deleteContract"
                                                onClick={() => showModal(contract.id, contract.contractCode)}
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
            <ModalDeleteContract
                setContracts={setContracts}
                idDelete={idDelete}
                contractCodeDelete={contractCodeDelete}
            />
        </>
    )
}