import {useEffect, useState} from "react";
import * as contractService from "../../service/contract_service";
import {NavLink} from "react-router-dom";
import {ModalDeleteContract} from "./ModalDeleteContract";

export function ContractList() {
    const [contracts, setContracts] = useState([]);
    const [idDelete, setIdDelete] = useState();
    const [contractCodeDelete, setContractCodeDelete] = useState();
    const [contractCodeSearch, setContractCodeSearch] = useState("");

    useEffect(() => {
        getAll();
    }, [contractCodeSearch])


    const getAll = async () => {
        const data = await contractService.getAllContract(contractCodeSearch);
        setContracts(data);
    }

    const showModal = (id, contractCode) => {
        setIdDelete(id);
        setContractCodeDelete(contractCode);
    }

    return (
        <>
            <div className="body">
                <div className="container shadow pb-1">
                    <div className="d-flex pt-3 mb-3 ">
                        <NavLink
                            to="/contracts/create"
                            className="btn btn-sm btn-primary rounded-0 me-3"
                        >
                            Create contract
                        </NavLink>
                        <input className="form-control-sm rounded-0 border-1 w-25" placeholder="Search contract code..."
                               name="contractCodeSearch"
                               onChange={(event) => setContractCodeSearch(event.target.value)}/>
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
                                contracts.length !== 0 ? contracts.map((contract, index) => (
                                    <tr key={contract.id}>
                                        <td>{index + 1}</td>
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
                                )) : <tr>
                                    <td colSpan="7" className="text-danger">Not found name: <b>{contractCodeSearch}</b>!</td>
                                </tr>
                            }
                            </tbody>
                        </table>
                    </div>
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