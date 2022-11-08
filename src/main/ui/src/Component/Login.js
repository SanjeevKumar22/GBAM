import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { authenticateLogin } from "../api";

// import { UseNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
//localStorage.setItem("isAuthenticated", "false");
console.log("auth:", localStorage.getItem("isAuthenticated"));

export const Login = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user_name, setuser_name] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  console.log("auth", localStorage.getItem("isAuthenticated"));
  //localStorage.setItem("isAuthenticated", "false");
  //window.location.pathname = "/";
  // const navigate = UseNavigate();
  //  const [formData,setFormData]= useState({
  //   user_name: "",
  //    password:"",
  //  })

  // User Login info
  // const database = [
  //   {

  //     username: "dhruvi",
  //     password: "pass1"
  //   },

  // ];

  // const errors = {
  //   uname: "invalid username",
  //   pass: "invalid password",
  // };

  const handleSubmit = async (e) => {
    //Prevent page reload
    e.preventDefault();
    const admin = { user_name, password };
    console.log(admin);
    let response = await authenticateLogin(admin);
    setIsSubmitted(response.data);
    if (!response.data) {
      setErrorMessages(true);
    } else {
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/menu";
    }
    // console.log(formData)

    // fetch("http://localhost:8081/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(admin),
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     //setErrorMessages=JSON.stringify(response);
    //     console.log(JSON.stringify(response));
    //     setIsSubmitted(JSON.stringify(response));
    //   });
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="user_name"
            required
            value={user_name}
            onChange={(e) => setuser_name(e.target.value)}
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        {errorMessages && <div>Please enter valid Username/Password</div>}
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="text-center title">Sign In</div>

        {isSubmitted ? <Navigate replace to="Menu" /> : renderForm}
      </div>
    </div>
  );
};

export default Login;
