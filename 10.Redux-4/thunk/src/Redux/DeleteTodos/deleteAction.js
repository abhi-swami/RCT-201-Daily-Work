import axios from "axios";
import { DELETE_TODO_ERROR,DELETE_TODO_REQUEST,DELETE_TODO_SUCCESS } from "./deleteActionType"; 



export const deleteTodoRequest=()=>{
    return{
        type:DELETE_TODO_REQUEST,
    }
}
export const deleteTodoSuccess=()=>{
    return{
        type:DELETE_TODO_SUCCESS,
    }
}
export const deleteTodoError=()=>{
    return{
        type:DELETE_TODO_ERROR,
    }
}

export const deleteTodo = (id) => (dispatch)=>{
    dispatch(deleteTodoRequest())
    return axios.delete(`http://localhost:8080/todos/${id}`).then((res)=>{
      dispatch(deleteTodoSuccess())
    }).catch((err)=>{
      dispatch(deleteTodoError())

    });
  };