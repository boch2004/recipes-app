import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userlogin } from "../JS/userSlice/userSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // استيراد أيقونات العين

function Login() {
  const navigate = useNavigate();
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false); // حالة لإظهار/إخفاء كلمة المرور
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <form onSubmit={(e) => e.preventDefault()} className="form-signin">
        <h2 className="form-signin-heading">Please login</h2>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Email Address"
          required
          autoFocus
          onChange={(e) => setlogin({ ...login, email: e.target.value })}
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            name="Password"
            placeholder="Password"
            required
            onChange={(e) => setlogin({ ...login, password: e.target.value })}
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <label className="checkbox">
          <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" style={{marginRight:10,marginBlock:4}} /> Remember me
        </label>
        <button
          className="btn btn-lg btn-primary btn-block"
          onClick={async () => {
            const result = await dispatch(userlogin(login)); 
            if (result.payload && !result.error) { 
              setTimeout(() => {
                navigate("/"); 
              }, 100);
            } else {
              console.error("Login failed!"); 
            }
          }}
          
        >
          login
        </button>
        <h5>
          Don't have an account? <Link to="/register">Register now</Link>
        </h5>
      </form>
    </div>
  );
}

export default Login;
