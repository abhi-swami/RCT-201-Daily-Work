import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isAuth=useSelector((store)=>store.AuthReducer.isAuth)
  return (
    <div
      data-testid="navbar"
      style={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div data-testid="navbar-home-link">
        <Link to={"/"}>
          <img
            src="/Adidas_Logo.png"
            width="60px"
            alt="logo"
            style={{ display: "block" }}
          />
        </Link>
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        {!isAuth && 
        <Link to="/login">
          <button data-testid="navbar-login-button">LOGIN</button>
        </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
