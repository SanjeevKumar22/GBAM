import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  let navigate = useNavigate();

  const menuRouterHandler = (event, route) => {
    console.log("Button pressed: " + route);
    navigate("/" + route);
  };

  return (
    <div
      classname="form"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div classname="inputcontainer">
        <h1 classname="large text-primary text-center">
          Menu<hr></hr>
        </h1>

        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          onClick={(event) => menuRouterHandler(event, "DispCustomers")}
        >
          Display Customers{" "}
        </button>
        {/*<button onClick={<Navigate replace to="loan" />}>Apply for Loan</button>*/}
        <br></br>
        <br></br>
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          onClick={(event) => menuRouterHandler(event, "AddAccount")}
        >
          Add Account
        </button>
        <br></br>
        <br></br>

        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          onClick={(event) => menuRouterHandler(event, "AddBranch")}
        >
          Add Branch
        </button>
        {/*<button onClick={<Navigate replace to="statement" />}>View Statement</button>*/}
        <br></br>
        <br></br>

        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          onClick={(event) => menuRouterHandler(event, "DispBranch")}
        >
          Display Branch Details
        </button>
        {/*<button onClick={<Navigate replace to="transactions" />}>Transactions</button>*/}
      </div>
    </div>
  );
};

export default Menu;
