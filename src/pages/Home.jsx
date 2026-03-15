
import BlogList from "../components/BlogList";
import useFetch from "../components/useFetch";

const Home = () => {
    const {data: blogs, loading, error} = useFetch("http://localhost:5000/blogs")
    
    return ( 
        <div className="container mt-5">
        {loading && <div> Loading Blogs . . . </div>}
        {error && {error}}
        {blogs && <BlogList blogData={blogs} title="Your Home for Tech News!"/>}
        </div>
     );
}
 
export default Home;