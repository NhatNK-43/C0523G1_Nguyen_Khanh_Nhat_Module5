import {useEffect, useState} from "react";
import * as postService from "../service/post_service"
import '../App.css';

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
                    <button className="btn btn-sm btn-success">Add a new Book</button>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th id="numberHead" scope="col" className="col-lg-1 col-md-1 col-sm-1">#</th>
                            <th id="titleHead" scope="col" className="col-lg-7 col-md-6 col-sm-5">Title</th>
                            <th id="quantityHead" scope="col" className="col-lg-2 col-md-2 col-sm-2">Quantity</th>
                            <th id="actionHead" scope="col" className="col-lg-2 col-md-3 col-sm-4">Action</th>
                        </tr>
                        </thead>
                        <tbody className="table-group-divider">
                        {
                            posts.map((post, index) => (
                                <tr key={post.id}>
                                    <td>{index + 1}</td>
                                    <td>{post.title}</td>
                                    <td>{post.quantity}</td>
                                    <td>
                                        {/*<div className="d-grid gap-2 d-md-block">*/}
                                            <button className="btn btn-sm btn-primary" type="button">Edit</button>
                                            <button className="btn btn-sm btn-danger ms-3" type="button">Delete</button>
                                        {/*</div>*/}
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