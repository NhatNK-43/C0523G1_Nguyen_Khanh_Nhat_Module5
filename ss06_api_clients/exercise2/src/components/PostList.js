import {useEffect, useState} from "react";
import * as postService from "../service/post_service"
import '../App.css';
import {Link, NavLink} from "react-router-dom";

export function PostList() {

    const [posts, setPosts] = useState([]);

    const getAll = async () => {
        let response = await postService.getAllPost();
        setPosts(response);
    }
    useEffect(() => {
        getAll();
    }, [])

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
                                            <Link to={`/update/${post.id}`} className="btn btn-sm btn-primary" type="button">Edit</Link>
                                            <button className="btn btn-sm btn-danger ms-3" type="button">Delete</button>
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