import axios from 'axios'
import {useEffect} from 'react'

const Todos = () => {

    const fetchData=()=>{
        axios.get("http://localhost:8080/todos").then(res=>res.data).catch()
    }


    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>Todos</div>
  )
}

export default Todos