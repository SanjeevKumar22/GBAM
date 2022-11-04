import React, { Suspense, useState } from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";
import axios from 'axios';


export const AddAccount = () =>{

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        var { accNumber, customNumber, breanchID, balance, openDate } = document.forms[0];
        setIsSubmitted(true);

    };

    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Enter Account Number </label>
              <input type="text" name="accNumber" required />
           
            </div>
            <div className="input-container">
              <label>Select Customer Number </label>
              <input type="text" name="customNumber" required />
         
            </div>
            <div className="input-container">
              <label>BranchID </label>
              <input type="text" name="branchID" required />
         
            </div>
            <div className="input-container">
              <label>Balance </label>
              <input type="integer" name="balance" required />
       
            </div>
            <div className="input-container">
              <label>Opening Date </label>
              <input type="text" name="openDate" required />
         
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );

    return (
    <div className="app">
        <div className="AccountOpening-form">
        <div className="title">Open Account</div>
        {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
        {isSubmitted ?  <Navigate to= "./menu" />: renderForm}

        </div>
    </div>
    );

}


export default AddAccount;