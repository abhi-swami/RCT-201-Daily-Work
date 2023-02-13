import {
  GET_PRODUCT_REQUSET,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
} from "./actionType";
import { IProductType } from "../../Utils/types";
import { apiRequestFunction } from "./apiRequest";
import { AppDispatch } from "../store";

interface IData {
  data: IProductType[];
  totalPages: number;
}

interface IgetProductRequest {
  type: typeof GET_PRODUCT_REQUSET;
}
interface IgetProductSuccess {
  type: typeof GET_PRODUCT_SUCCESS;
  payload: IData;
}
interface IgetProductError {
  type: typeof GET_PRODUCT_ERROR;
}

export type IactionType =
  | IgetProductRequest
  | IgetProductSuccess
  | IgetProductError;

const getProductRequest = (): IgetProductRequest => {
  return {
    type: GET_PRODUCT_REQUSET,
  };
};
const getProductSuccess = (data: IData): IgetProductSuccess => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: data,
  };
};
const getProductError = (): IgetProductError => {
  return {
    type: GET_PRODUCT_ERROR,
  };
};

export const getProducts =
  (getProductsParam: {
    params: {
      _page: number;
      _limit: number;
      category: string[];
      _sort: string|null;
      _order: string|null;
    };
  }): any =>
  async (dispatch: AppDispatch) => {
    dispatch(getProductRequest());
    try {
      const data = await apiRequestFunction(getProductsParam);
      dispatch(getProductSuccess(data));
    } catch (er) {
      dispatch(getProductError());
    }
  };
