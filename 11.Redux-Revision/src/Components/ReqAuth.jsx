//Create the HOC for protected Routes

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ReqAuth = ({children}) => {
    const isAuth=useSelector((store)=>store.AuthReducer.isAuth)
   return isAuth ?children:<Navigate to="/login"/>

};

export default ReqAuth;
