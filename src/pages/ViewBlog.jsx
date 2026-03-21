import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ViewBlog = () => {

    const {id} = useParams();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
        .get(`http://localhost:5000/blogs/${id}`)
        .then(res => {
            setBlog(res.data)
        })
        .catch(error => {
            setError(error.message)
        })
        //You can do a catch here !
    })

    const handleDelete = () => {
        axios
        .delete(`http://localhost:5000/blogs/${id}`)
        .then(() => {
            navigate("/");
            //Can have the state to show a successfull delete
        })
        .catch(error => {
            setError(error.message)
        })
    }

    return ( 
        <div>
            {error && {error}}
            {blog && 
            <div className="container mt-4 card shadow-lg p-4">
                <h4 className="text-muted">
                    {blog.title}
                </h4>
                <p>
                    Written By : {blog.author}
                </p>
                <p>
                    {blog.content}
                </p>
                <Link className="btn btn-outline-primary btn-sm mb-2" to={`/edit-blog/${id}`}>
                    Edit Blog
                </Link>
                <button onClick={handleDelete} className="btn btn-outline-danger btn-sm">
                    Delete Blog
                </button>
            </div>
            }
        </div>
     );
}
 
export default ViewBlog;