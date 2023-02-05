import axios from "axios";
import {GET_TODOS_REQUEST,GET_TODOS_SUCCESS,GET_TODOS_ERROR} from "./todoActionType";


export const getTodoRequset=()=>{
    return{
        type:GET_TODOS_REQUEST,
    }
}
export const getTodoSuccess=(payload)=>{
    return{
        type:GET_TODOS_SUCCESS,
        payload,
    }
}
export const getTodoError=()=>{
    return{
        type:GET_TODOS_ERROR,
    }
}
export const fetchTodos = (dispatch) => {
    dispatch(getTodoRequset());
    axios
      .get(`http://localhost:8080/todos`)
      .then((res) => {
        dispatch(getTodoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getTodoError());
      });
  };

  