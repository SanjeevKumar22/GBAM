import React from "react";
import { useEffect, useState } from "react";
import {Navigate} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "./Login.css"

const Menu = () => {

  let navigate = useNavigate();

  const menuRouterHandler = (event, route) => {
    console.log("Button pressed: " + route);    
    navigate("/"+route);
  }
 
    return (
      <div className="input-container">
        <h1 >Menu</h1>
        <hr></hr>
        <button onClick={event => menuRouterHandler(event, "DispCustomers")}>Display Customers</button>
        {/*<button onClick={<Navigate replace to="loan" />}>Apply for Loan</button>*/}
        <hr></hr>
        <button onClick={event => menuRouterHandler(event, "DispBranch")}>Display Branch Details</button>
        {/*<button onClick={<Navigate replace to="transactions" />}>Transactions</button>*/}
        <hr></hr>
        <button onClick={event => menuRouterHandler(event, "AddAccount")}>Add Customer</button>
        {/*<button onClick={<Navigate replace to="statement" />}>View Statement</button>*/}
        <hr></hr>
        <button onClick={event => menuRouterHandler(event, "AddBranch")}>Add Branch</button>
      </div>
    );
};

export default Menu;