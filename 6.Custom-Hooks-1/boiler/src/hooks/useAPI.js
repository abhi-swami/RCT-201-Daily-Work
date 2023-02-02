import { useState,useEffect } from "react";



const useAPI = (apiFuction) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error,setError]=useState("")
  const [data, setData] = useState([]);

  const execute = async () => {
    try {
      setLoading(true);
      let data = await apiFuction();
      setData(data);
      setSuccess(true);
    } catch (e) {
      setError(e.message)
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return{loading,success,error,data,setData,execute}
};

export default useAPI;
