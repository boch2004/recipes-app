import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../JS/userSlice/userSlice";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [register, setregister] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setregister({ ...register, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const result = await dispatch(userRegister(register));
    if (result.payload && !result.error) {
      navigate("/");
    } else {
      console.error("Registration failed!");
    }
  };

  return (
    <div>
      <div className="wrapper">
        <form onSubmit={handleRegister} className="form-signin">
          <h2 className="form-signin-heading">Please Register</h2>

          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            required
            autoFocus
            onChange={handleChange}
          />

          <input
            type="text"
            className="form-control"
            name="lastname"
            placeholder="Last Name"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
          />

          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Register
          </button>

          <h5>
            Already have an account? <Link to="/login">Sign in</Link>
          </h5>
        </form>
      </div>
    </div>
  );
}

export default Register;
