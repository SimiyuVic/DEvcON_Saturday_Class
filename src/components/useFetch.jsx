import { useState,useEffect } from "react"
import axios from "axios"

const useFetch = (url) => {

    const[data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    
   useEffect(() => {
    
    const FetchData = async () => {
        try 
        {
            const response = await axios.get(url)
            setData(response.data)
        }
        catch(error)
        {
            setError(error.message)
        }
        finally 
        {
            setLoading(false)
        }
    }
    FetchData();
   }, [url]);

    return  {data, error, loading}
     
}

export default useFetch;