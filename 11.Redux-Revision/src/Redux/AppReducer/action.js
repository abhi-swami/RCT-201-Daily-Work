//Write the ActionCreator functions here
import axios from "axios";
import {
  GET_SHOES_DATA_REQUEST,
  GET_SHOES_DATA_SUCCESS,
  GET_SHOES_DATA_FAILURE,
} from "./actionType";

const getShoesDataRequest = () => {
  return {
    type: GET_SHOES_DATA_REQUEST,
  };
};
const getShoesDataSuccess = (payload) => {
  return {
    type: GET_SHOES_DATA_SUCCESS,
    payload,
  };
};
const getShoesDataFailure = () => {
  return {
    type: GET_SHOES_DATA_FAILURE,
  };
};

export const fetchData =(obj) => (dispatch)=>{
  let url1=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/shoes`;
  let  flag=false;
  console.log(obj)
  for(let i in obj){
    if(obj[i]){
      if(flag){
        url1=url1+`&category=`+i
        
      }else{
        flag=true;
        url1=url1+`?category=${i}`
      }
    }
  }
  console.log(url1)
  dispatch(getShoesDataRequest());
  axios
    .get(`${url1}`)
    .then((res) => {
      dispatch(getShoesDataSuccess(res.data));

    //   console.log(res.data);
    }).catch((err)=>{
        dispatch(getShoesDataFailure());

    })

};
