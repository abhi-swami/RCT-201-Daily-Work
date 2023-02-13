
import {
    GET_PRODUCT_REQUSET,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_ERROR,
  } from "./actionType";

import { IactionType } from './action'
import { IProductType } from '../../Utils/types';

interface Iinitial{
    isError:boolean,
    isLoading:boolean,
    data:IProductType[],
    totalpages:number,

}

const initial:Iinitial={
    isError:true,
    isLoading:true,
    data:[],
    totalpages:0,

}

export const appReducer = (state=initial,action:IactionType):Iinitial => {
  switch(action.type){
    case GET_PRODUCT_REQUSET:{
        return{
            ...state,
            isLoading:true,
        }   
    }
    case GET_PRODUCT_SUCCESS:{
        return{
            ...state,
            isLoading:false,
            data:action.payload.data,
            totalpages:action.payload.totalPages,
        }   
    }
    case GET_PRODUCT_ERROR:{
        return{
            ...state,
            isLoading:false,
            isError:true,
        }   
    }
    default :{
        return{
            ...state,
        }
    }
  }
}
