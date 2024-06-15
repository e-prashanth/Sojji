import React, { useState } from "react";
import "./loginPage.scss";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
  };
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div className="loginContainer">
      <img src="/logo.png" className="LogoImage" />
      <div className="card">
        <div className="leftContainer">
          <h1>Hey Folks!!</h1>
          <p>
            Welcome to Sojji, where you can connect with friends, share your
            moments, and discover new interests. This platform is designed to
            help you stay connected with the people and topics you care about.
          </p>
          <span>Don't have a account?</span>
          <button
            onClick={() => {
              handleRegister();
            }}
          >
            Register
          </button>
        </div>
        <div className="rigthContainer">
          <h1>Login</h1>
          <form
            className="FormContiner"
            onSubmit={(e) => {
              handleLogin(e);
            }}
          >
            <input
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
