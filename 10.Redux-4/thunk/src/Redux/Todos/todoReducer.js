import {GET_TODOS_REQUEST,GET_TODOS_SUCCESS,GET_TODOS_ERROR} from "./todoActionType";

const initial={
    isLoading:false,
    isError:false,
    todo:[],
}

export const todoReducer=(state=initial,action)=>{
    switch(action.type){
        case GET_TODOS_REQUEST:{
            return{
                ...state,isLoading:true
            }
        }
        case GET_TODOS_SUCCESS:{
            return{
                ...state,isLoading:false,todo:action.payload
            }
        }
        case GET_TODOS_ERROR:{
            return{
                ...state,isLoading:true,isError:true
            }
        }
        default:{
            return{
                ...state,
            }
        }
    }
}