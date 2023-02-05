import { DELETE_TODO_ERROR,DELETE_TODO_REQUEST,DELETE_TODO_SUCCESS } from "./deleteActionType";


const initial={
    isLoading:false,
    isError:false
}
export const deleteRuducer=(state=initial,action)=>{
    switch(action.type){
        case DELETE_TODO_REQUEST:{
            return{
                ...state,isLoading:true
            }
        }
        case DELETE_TODO_SUCCESS:{
            return{
                ...state,isLoading:true
            }
        }
        case DELETE_TODO_ERROR:{
            return{
                ...state,isLoading:true
            }
        }
        default:{
            return{
                ...state,
            }
        }
    }
}