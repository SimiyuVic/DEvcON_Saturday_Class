import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const EditBlog = () => {

    const [author, setAuthor] = useState([]);
    const [title, setTitle] = useState([]);
    const [category, setCategory] = useState([]);
    const [content, setContent] = useState([]);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/blogs/${id}`)
                setAuthor(response.data.author);
                setTitle(response.data.title);
                setCategory(response.data.category);
                setContent(response.data.content);
            }
            catch(error)
            {
                setError(error.message)
            }
        }
        fetchData();
    }, [id])

    const handleEdit = (e) => {
        e.preventDefault();
        const editData = {author, title, category, content}

        axios.put(`http://localhost:5000/blogs/${id}`, editData)
        .then(() => {
            navigate("/");
        })
        .catch(error => {
            console.log(error.message)
        })

    }

    return ( 
        
        <div className="container mt-4">
            <div className="row justify-content-center m-1">
                <div className="col-md-7 card shadow-lg p-2">
                <h4 className="text-center text-muted">
                    Edit Your Blogs!
                </h4>
                    <form onSubmit={handleEdit}>
                        <div className="mb-3">
                            <label className="form-label">
                                Author's Name
                            </label>
                            <input 
                            type="text" 
                            className="form-control"
                            required
                            placeholder="e.g John Doe"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Blog Title
                            </label>
                            <input 
                            type="text" 
                            className="form-control"
                            required
                            placeholder="Enter your Blog Title . . ."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Select Your category
                            </label>
                            <select 
                            className="form-select"
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">Select Category</option>
                                <option value="Technology">Technology</option>
                                <option value="Health">Health</option>
                                <option value="Business">Business</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Enter Your Blog Details here.
                            </label>
                            <textarea
                            className="form-control"
                            placeholder="Type your Blog Contents here . . . "
                            required
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-outline-primary w-100 btn-sm">
                                Edit Blog
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default EditBlog;