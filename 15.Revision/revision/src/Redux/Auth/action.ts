import { LoginData } from "../../Utils/types";
import { AppDispatch } from "../store";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "./actionType";
import { loginAPIRequest } from "./api.login";


interface IloginRequest{
        type:typeof LOGIN_REQUEST
}
interface IloginSuccess{
        type:typeof LOGIN_SUCCESS
}
interface IloginError{
        type:typeof LOGIN_ERROR
}
export type IlogignAction=IloginRequest|IloginSuccess|IloginError;


const loginRequest=():IloginRequest=>{
    return{
        type:LOGIN_REQUEST
    }
}
const loginSuccess=():IloginSuccess=>{
    return{
        type:LOGIN_SUCCESS
    }
}
const loginError=():IloginError=>{
    return{
        type:LOGIN_ERROR
    }
}


export const login:any=(data:{input:LoginData})=>(dispatch:AppDispatch)=>{
    
    dispatch(loginRequest())
        return loginAPIRequest(data).then((res)=>{
            if (res===200){
                dispatch(loginSuccess())
                return res
            }
        }).catch((err)=>{
            dispatch(loginError())

        })
        



}