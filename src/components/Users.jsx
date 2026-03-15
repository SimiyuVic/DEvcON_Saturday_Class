
import BlogList from "../components/BlogList";
import useFetch from "../components/useFetch";

const Users = () => {
    const {data: users, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users")
    
    return ( 
        <div className="container mt-5">
        {loading && <div> Loading Users . . . </div>}
        {error && {error}}
        {users && users.map((user) => {
            return (<h4>{user.name}</h4>)
        })}
        </div>
     );
}
 
export default Users;