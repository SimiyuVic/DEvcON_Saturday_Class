import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ViewBlog = () => {

    const {id} = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        axios
        .get(`http://localhost:5000/blogs/${id}`)
        .then(res => {
            setBlog(res.data)
        })
        //You can do a catch here !
    })

    return ( 
        <div className="container">
            {blog && 
            <div>
            <h4>{blog.author}</h4>
            <h4>{blog.category}</h4>
            </div>
            
            }
        </div>
     );
}
 
export default ViewBlog;