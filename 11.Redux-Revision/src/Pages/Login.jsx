import { useState } from "react";
import { handleLogin } from "../Redux/AuthReducer/action";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
const initial = {
  email: "",
  password: "",
};
const Login = () => {
  const [input, setInput] = useState(initial);
  const { email, password } = input;
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store) => store.AuthReducer.isAuth);
  if(isLoggedIn){
    navigate(-1,{replace:true})
  }

  const handleClick = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(input))
  };
  return (
    <div data-testid="login">
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input
            data-testid="login-email"
            name="email"
            value={email}
            onChange={handleClick}
          />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input
            data-testid="login-password"
            type="password"
            name="password"
            value={password}
            onChange={handleClick}
          />
        </div>
        <button type="submit" data-testid="login-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
