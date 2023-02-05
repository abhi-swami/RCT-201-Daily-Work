import axios from "axios";
import { POST_TODO_ERROR,POST_TODO_SUCCESS,POST_TODO_REQUEST } from "./InputActionType";


const url = `http://localhost:8080/todos`;
export const postTodoRequest=()=>{
    return{
        type:POST_TODO_REQUEST
    }
}
export const postTodoSuccess=(payload)=>{
    return{
        type:POST_TODO_SUCCESS,
        payload
    }
}
export const postTodoError=()=>{
    return{
        type:POST_TODO_ERROR
    }
}

export const addNewTodo = (input) =>(dispatch)=> {
    if (input) {
      const payload = {
        title: input,
        status: false,
      };
      dispatch(postTodoRequest());
      return axios({
        method: "post",
        url: `${url}`,
        data: {
          ...payload,
        },
      })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          dispatch(postTodoError());
        });
    }
  };
