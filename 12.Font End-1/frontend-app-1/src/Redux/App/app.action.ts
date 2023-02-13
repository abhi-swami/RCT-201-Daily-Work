import { Product } from "../../utils/type";
import { AppDispatch } from "../store";
import { PRODUCT_REQUEST,GET_PRODUCT_SUCCESS,PRODUCT_ERROR } from "./app.actionTypes";
import getProductsAPI from "./app.api";

interface IOutput{
    data:Product [],
    totalPages:any;
}


export interface IproductRequest{
    type:typeof PRODUCT_REQUEST
}

export interface IproductSuccess{
    type:typeof GET_PRODUCT_SUCCESS
    payload:IOutput
}

export interface IproductError{
    type:typeof PRODUCT_ERROR
}



export type AppAction=IproductRequest|IproductSuccess|IproductError

const productRequest=():IproductRequest=>{
    return{
        type:PRODUCT_REQUEST,
    }
}

const productSuccesss=(data:IOutput,):IproductSuccess=>{
    return{
        type:GET_PRODUCT_SUCCESS,
        payload:data,
    }
}
const productError=():IproductError=>{
    return{
        type:PRODUCT_ERROR,
    }
}

export const getPrdoucts=(params:{params:{category:string[]}}):any => async(dispatch:AppDispatch)=>{
    dispatch(productRequest());
    try{
        let data=await getProductsAPI(params);
        if(data){
            dispatch(productSuccesss(data))
        }
    }catch(err){
        dispatch(productError());

    }
}