import axios from "axios";
import { LoginData } from "../../Utils/types";

export const loginAPIRequest=async(input:{input:LoginData})=>{
    const res=await  axios.post(`https://reqres.in/api/login`,input);
    return(res.status)
}