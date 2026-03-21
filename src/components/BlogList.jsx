import { Link } from "react-router-dom";

const BlogList = ({blogData, title}) => {
    return ( 
        <div className="container mt-4">
            <h4 className="text-center text-muted">
                {title}
            </h4>
            <div className="row">
                {blogData.map((blog) => {
                    return (
                        <div className="col-md-6 col-lg-4 mb-3" key={blog.id}>
                            <div className="card h-100 shadow-lg border-0 blog-card">
                                <img
                                src={blog.image}
                                className="card-img-top"
                                alt={blog.title}
                                style={{height: "220px", objectFit: "cover"}}
                                />

                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold">
                                        {blog.title}
                                    </h5>

                                    <p className="card-text text-muted small">
                                        {blog.content}  . . .
                                    </p>

                                    <Link className="btn btn-outline-primary btn-sm" to={`/blogs/${blog.id}`}>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default BlogList;