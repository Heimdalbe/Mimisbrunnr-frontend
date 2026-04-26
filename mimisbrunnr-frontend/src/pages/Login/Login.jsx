import { useState } from "react";
import { axios, post } from "../../api";
import PrimaryButton from "../../components/Common/PrimaryButton/PrimaryButton";
import "./Login.css";

const Login = () => {
  return (
    <div className="container-sm-tm">
      <h1>Login</h1>
      <form className="login-form">
        <div>
          <label>Email</label>
          <input type="email" required placeholder="email@example.com" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" required placeholder="password" />
        </div>
        <PrimaryButton text={"Log in"} isLight={true} to={"/"} />
      </form>
    </div>
  );
};

export default Login;
