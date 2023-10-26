
import * as customerService from "../../service/customer_service"
import {toast} from "react-toastify";
export function ModalDeleteCustomer({idDelete,nameDelete, setCustomers}){
    const handleDelete = async () => {
        let status = await customerService.deleteCustomer(idDelete);
        if (status===200){
            toast.success(`Delete ${nameDelete} successfully!`);
            setCustomers(await customerService.getAllCustomer());
        } else {
            toast.error(`Delete ${nameDelete} failed!`);
        }
    }
    return(
        <>
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                Delete Book
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete customer name: <span className="text-danger fw-bold">
                                {nameDelete}</span>
                            <small className="text-danger">You won't be able to revert this!</small>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary btn-sm"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-danger btn-sm" data-bs-dismiss="modal"
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