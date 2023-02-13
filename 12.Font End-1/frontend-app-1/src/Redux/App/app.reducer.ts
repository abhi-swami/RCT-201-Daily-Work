import { Product } from "../../utils/type";
import { AppAction } from "./app.action";
import {
  PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  PRODUCT_ERROR,
} from "./app.actionTypes";

export interface AppState {
  loading: boolean;
  error: boolean;
  data: Product[];
  totalPage:string;
}

const initial: AppState = {
  loading: false,
  error: false,
  data: [],
  totalPage:''
};

export const reducer = (state = initial, action: AppAction):AppState => {
  switch (action.type) {
    case PRODUCT_REQUEST:{
        return{
            ...state,
            loading:true,
        }
    }
    case GET_PRODUCT_SUCCESS:{
        return{
            ...state,
            loading:false,
            data:action.payload.data,
            totalPage:action.payload.totalPages,
        }
    }
    case PRODUCT_ERROR:{
        return{
            ...state,
            loading:false,
            error:true
        }
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
