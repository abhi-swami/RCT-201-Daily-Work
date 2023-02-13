import {useEffect, useState} from "react";
import axios from "axios"


import { useParams } from "react-router-dom";

const SingleShoe = () => {
  const [data,setData]=useState({})
  const {id}=useParams();

  

  const fetchSingleProduct=()=>{
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/shoes/${id}`).then((res)=>setData(res.data))
  }
  useEffect(()=>{
    fetchSingleProduct()
  },[])
   return(
    <div>
      <h1>Single Shoe Page</h1>
      {data &&
      <div>
        <img src={data.image} alt={data.name}/>
        <h3>{data.name}</h3>
        <h4>{data.category}</h4>
      </div>
      }
    </div>
  )
};

export default SingleShoe;
