import axios from "axios";
import {
  PATCH_TODO_REQUEST,
  PATCH_TODO_SUCCESS,
  PATCH_TODO_ERROR,
} from "./toggleActionType";

const patchTodoRequest = () => {
  return {
    type: PATCH_TODO_REQUEST,
  };
};
const patchTodoSuccess = () => {
  return {
    type: PATCH_TODO_SUCCESS,
  };
};
const patchTodoError = () => {
  return {
    type: PATCH_TODO_ERROR,
  };
};
export const toggleTodo = (id) => (dispatch) => {
  dispatch(patchTodoRequest());
  return axios
    .get(`http://localhost:8080/todos/${id}`)
    .then((res) => res.data.status)
    .then((res) => {
      axios
        .patch(`http://localhost:8080/todos/${id}`, {
          status: !res,
        })
        .then((res) => {
          dispatch(patchTodoSuccess());
          return res;
        })
        .catch((er) => {
          dispatch(patchTodoError());
        });
    });
};
