import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAll} from "../reduxs/middlewares/UserMiddleware";
import {ModalConfirm} from "./ModalConfirm";


export function UserList() {
    const users = useSelector((store) => store.users);
    const dispatch = useDispatch();
    const [idDelete, setIdDelete] = useState();
    const [nameDelete, setNameDelete] = useState();
    const [isShowModal, setIsShowModal] = useState(false);

    useEffect(() => {
        dispatch(getAll())
    }, []);

    const handleShowModal = (id, name) => {
        setIsShowModal(true);
        setIdDelete(id);
        setNameDelete(name);
    }

    if (!users) {
        return null;
    }
    return (
        <>
            <div className="container">
                <h2>User List</h2>
                <button className="btn btn-sm btn-success">Get users</button>
                <div>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody className="table-group-divider">
                        {
                            users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm"
                                                data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop"
                                                onClick={() => handleShowModal(user.id, user.name)}>Delete user
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            {/*{isShowModal &&*/}
            <ModalConfirm
                isShowModal={isShowModal}
                idDelete={idDelete}
                nameDelete={nameDelete}
            />
            {/*}*/}
        </>
    )
}