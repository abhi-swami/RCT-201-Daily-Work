import  { useState } from "react";


const useDelayedAPI = (apiFun) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error,setError]=useState("");
    const[data,setData]=useState([])
    const execute = async (param) => {
      try {
        setLoading(true);
        let post  = await apiFun(param); 
        setData(post);
        setSuccess(true);
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false);
      }
    };
    return{loading,success,error,data,execute}
 
}

export default useDelayedAPI