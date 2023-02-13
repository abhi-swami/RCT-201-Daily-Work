import axios, { Axios, AxiosResponse } from "axios";
import { IProductType } from "../../Utils/types";
const url = `http://localhost:8080/data`;
export const apiRequestFunction = async (getProductsParam: {
  params: {
    _page: number;
    _limit: number;
    category: string[];
    _sort: string|null;
    _order: string|null;
  };
}) => {
  const res = await axios.get(`${url}`, getProductsParam);
  // console.log(res.headers.getAll('X-Total-Count'))
  const data: IProductType[] = res.data;
  const totalPages: number = 8;
  return { data, totalPages };
};
