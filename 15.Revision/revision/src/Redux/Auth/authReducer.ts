import { IlogignAction } from "./action"
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "./actionType";


interface IAppState{
    isLoading:boolean,
    isError:boolean,
    token:string,
}

const initial:IAppState={
    isLoading:false,
    isError:false,
    token:""
}

export const authReducer=(state=initial,action:IlogignAction)=>{
    switch(action.type){
        case LOGIN_REQUEST:{
            return{
                ...state,
                isLoading:true
            }
        }
        case LOGIN_SUCCESS:{
            return{
                ...state,
                isLoading:false
            }
        }
        case LOGIN_ERROR:{
            return{
                ...state,
                isLoading:false,
                isErrore:true
            }
        }
        
        default:return state;
    }
}