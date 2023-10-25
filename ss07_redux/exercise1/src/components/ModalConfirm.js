import {useDispatch} from "react-redux";
import {remove} from "../reduxs/middlewares/UserMiddleware";
import {useState} from "react";
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify";

export function ModalConfirm(object) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleDelete = ()=>{
        dispatch(remove(object.idDelete));
        navigate("/");
        toast.success("Delete successfully");
    }
    return (
        <>
            <div
                className="modal fade"
                // className="modal modal-open d-block"
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
                            Are you sure you want to delete user name: <span className="text-danger fw-bold">
                                {object.nameDelete}</span>
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