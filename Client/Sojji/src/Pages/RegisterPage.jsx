import React, { useState } from "react";
import "./registerPage.scss";
import { useNavigate } from "react-router-dom";
function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
  };
  return (
    <div className="registerContianer">
      <img src="/logo.png" alt="companylogo" className="LogoImage" />
      <div className="card">
        <div className="leftContainer">
          <h1>Register</h1>
          <form onSubmit={(e) => handleRegister(e)}>
            <input
              required={true}
              type="text"
              placeholder="Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <input
              required={true}
              type="text"
              placeholder="Username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              required={true}
              type="email"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              required={true}
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button>Register</button>
          </form>
        </div>
        <div className="rightContainer">
          <h1>Sojji !!.</h1>
          <p>
            Welcome to Sojji, where you can connect with friends, share your
            moments, and discover new interests. This platform is designed to
            help you stay connected with the people and topics you care about.
          </p>
          <span>Already have a account?</span>
          <button
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
