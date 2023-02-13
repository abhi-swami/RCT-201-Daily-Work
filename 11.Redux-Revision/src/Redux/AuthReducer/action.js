//Write the ActionCreator functions here
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";
import axios from "axios";

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};
const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};
const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const handleLogin = (input) => (dispatch) => {
  dispatch(loginRequest()); axios
    .post(`https://reqres.in/api/login`,input)
    .then((res) => {
      console.log(res.data.token)
      dispatch(loginSuccess(res.data.token));
    })
    .catch((err) => {
      dispatch(loginFailure());
    });
};
