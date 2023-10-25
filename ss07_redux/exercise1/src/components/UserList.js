import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import store from "../reduxs/Store";
import {useEffect} from "react";
import {getAll} from "../reduxs/middlewares/UserMiddleware";


export function UserList(){
    const users = useSelector ((store) => store.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll())
    }, []);

    if(!users){
        return null;
    }
    return(
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
                            users.map(user=>(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">Delete user</button>
                                    </td>
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