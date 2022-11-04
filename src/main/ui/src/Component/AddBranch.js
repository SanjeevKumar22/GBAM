import React, { Suspense, useState } from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";
import axios from 'axios';
import {useNavigate} from "react-router-dom";


export const AddBranch = () =>{
    let navigate = useNavigate();

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
        <Navigate to= "./menu" />
        var { branchID, branchName, branchAddress } = document.forms[0];
        <div>{branchID}</div>
        setIsSubmitted(true);
        navigate("/Menu");

    };

    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Branch ID </label>
              <input type="text" name="branchID" required />
              
           
            </div>
            <div className="input-container">
              <label>Branch Name </label>
              <input type="text" name="branchName" pass="required" />
         
            </div>
            <div className="input-container">
              <label>Branch Address </label>
              <input type="text" name="branchAddress" required />
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
        <div className="title">Add Branch Details</div>
        {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
        {isSubmitted ?  <Navigate to= "./menu" />: renderForm}

        </div>
    </div>
    );

}


export default AddBranch;