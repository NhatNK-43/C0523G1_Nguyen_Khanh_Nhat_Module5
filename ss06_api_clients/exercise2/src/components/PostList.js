import {useEffect, useState} from "react";
import * as postService from "../service/post_service"
import '../App.css';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export function PostList() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [idDelete, setIdDelete] = useState();
    const [titleDelete, setTitleDelete] = useState();

    const getAll = async () => {
        let response = await postService.getAllPost();
        setPosts(response);
    }
    useEffect(() => {
        getAll();
    }, [])

    const handleShow = (idDelete, titleDelete) => {
        setIdDelete(idDelete);
        setTitleDelete(titleDelete);
    }
    const handleDelete = async () => {
        let status = await postService.deleteBook(idDelete);
        if (status === 200) {
            await getAll();
            toast.success("Delete successfully!");
            navigate("/");
        } else {
            toast.error("Delete failed!");
            navigate("/");
        }
    }
    if (!posts) {
        return null;
    }

    return (
        <>
            <div className="container">
                <div className="navbar">
                    <h3 className="fw-bold">Library</h3>
                    <NavLink className="btn btn-sm btn-success" to="/create">Add a new Book</NavLink>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col" className="col-lg-1 col-md-1 col-sm-1">#</th>
                            <th cope="col" className="col-lg-7 col-md-6 col-sm-5">Title</th>
                            <th scope="col" className="col-lg-2 col-md-2 col-sm-2">Quantity</th>
                            <th scope="col" className="col-lg-2 col-md-3 col-sm-4 action">Action</th>
                        </tr>
                        </thead>
                        <tbody className="table-group-divider">
                        {
                            posts.map((post, index) => (
                                <tr key={post.id}>
                                    <td>{index + 1}</td>
                                    <td>{post.title}</td>
                                    <td>{post.quantity}</td>
                                    <td className="action">
                                        <Link to={`/update/${post.id}`} className="btn btn-sm btn-primary"
                                              type="button">Edit</Link>
                                        <button className="btn btn-sm btn-danger ms-3" type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop"
                                                onClick={() => handleShow(post.id, post.title)}>Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>

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
                                Are you sure you want to delete the book title: <span
                                className="text-danger fw-bold">{titleDelete}</span></div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-danger btn-sm" data-bs-dismiss="modal" onClick={handleDelete}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*}*/}
            </div>
        </>
    )
}