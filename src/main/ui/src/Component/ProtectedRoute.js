import React from "react";
import { Navigate , Route } from "react-router-dom";
const useAuth=()=>{
    const user=localStorage.getItem('isAuthenticated')
    console.log("menu",user)
    if(user) {
      return true
    } else {
      return false
    }
  }
const ProtectedRoute = ({ children }) => {
    const authed = useAuth() // isauth() returns true or false based on localStorage
    
    return authed ? children : <Navigate to="/" />;
  }

export default ProtectedRoute;