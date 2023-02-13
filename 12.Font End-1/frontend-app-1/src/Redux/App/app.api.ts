import axios, {  AxiosResponse } from "axios";
import { Product } from "../../utils/type";
const url=`http://localhost:8080/products`

const getCount=(obj:any)=>{
  for(let key in obj){
    if(key==='x-total-count'){
      return obj[key]
    }
  }
}


export default async function getProductsAPI(param:{params:{category:string[]}}) {
  try {
    let res:AxiosResponse<Product[]>=await axios.get(`${url}`,param)
    let totalPages=res.headers.getAll('x-total-cout')
    totalPages=getCount(totalPages)
    let data=res.data
    let output={data,totalPages}
    return output;
  } catch (err) {
    console.error("error occured at getProductsAPI is:-",err);
  }
}
/*
(property) AxiosHeaders.get: AxiosHeaderValue | {
    (headerName: string, parser: RegExp): RegExpExecArray | null;
    (headerName: string, matcher?: true | AxiosHeaderMatcher | undefined): AxiosHeaderValue;
} | undefined
*/