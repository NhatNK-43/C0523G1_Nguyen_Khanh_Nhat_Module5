
import * as contractService from "../../service/contract_service"
import {toast} from "react-toastify";
export function ModalDeleteContract({idDelete, contractCodeDelete, setContracts}){
    const handleDelete = async () => {
        let status = await contractService.deleteContract(idDelete);
        if (status===200){
            toast.success(`Delete contract ${contractCodeDelete} successfully!`);
            setContracts(await contractService.getAllContract(""));
        } else {
            toast.error(`Delete contract ${contractCodeDelete} failed!`);
        }
    }
    return(
        <>
            <div
                className="modal fade"
                id="deleteContract"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-danger">
                            <h1 className="modal-title fs-5 fw-bold text-bg-danger" id="staticBackdropLabel">
                                Delete Contract
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete contract <span className="text-danger fw-bold">
                                {contractCodeDelete}</span></p>
                            <p className="text-danger">
                                <span className="text-decoration-underline">Note:</span>
                                &nbsp; You won't be able to revert this!
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary btn-sm rounded-0"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-danger btn-sm rounded-0" data-bs-dismiss="modal"
                                    onClick={handleDelete}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}