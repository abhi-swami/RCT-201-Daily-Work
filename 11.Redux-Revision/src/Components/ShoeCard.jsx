import React from "react";
import {  useNavigate } from "react-router-dom";

//Get the shoe card data from props
const ShoeCard = ({ shoeId, image, name, category, id }) => {
  const navigate=useNavigate()
  return (

      <div
        data-testid={`shoe-card-wrapper-${shoeId}`}
        style={{
          display: "grid",
          width: "300px",
          height:"390px",
          border:"2px solid black",
          borderRadius: "5px",
          justifyContent:"center",
          alignItems:"center",
          margin:"auto",
          cursor:"pointer"
        }}
        onClick={()=>navigate(`shoes/${id}`)}
      >
        <div style={{justifyContent:"center",
          alignItems:"center", margin:"auto"}}>
          <img
            data-testid="shoe-card-image"
            src={image}
            alt={name}
            style={{ width: "90%",height:"40vh"}}
          />
        </div>
        <div>
          <div data-testid="shoe-name">{name}</div>
          <div data-testid="shoe-category">{category}</div>
        </div>
      </div>

  );
};

export default ShoeCard;
