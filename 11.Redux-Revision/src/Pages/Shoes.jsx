import { useEffect, useState } from "react";

import Filter from "../Components/Filter";
import { fetchData } from "../Redux/AppReducer/action";
import { useSelector, useDispatch } from "react-redux/es/exports";
import ShoeCard from "../Components/ShoeCard";


const Shoes = () => {
  const [data,setData]=useState({})
  const dispatch = useDispatch();
  const product = useSelector((store) => store.AppReducer.shoes);

  const handleChange=(e)=>{
    const {value,checked}=e.target;
      setData({...data,[value]:checked})
  }
  useEffect(() => {
    dispatch(fetchData(data));
  }, [data]);
  return (
    <div style={{ display: "flex" }}>
      <Filter handleChange={handleChange}/>
      <div  style={{
             width:'90%',
             display:"grid",
             gap:'10px',
             gridTemplateColumns:'repeat(auto-fit,minmax(310px,max-content))',
             justifyContent:'center',
    }}>
        {product.map((el) => (
          <ShoeCard key={el.id} shoeId={el.id} {...el} />
        ))}
        {/* Map through the shoes list here using ShoeCard Component */}
      </div>
    </div>
  );
};

export default Shoes;
