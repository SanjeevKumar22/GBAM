import React, { Suspense, useState } from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";
import axios from 'axios';
import {useNavigate} from "react-router-dom";



export const AddAccount = () =>{
    
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [data, setData]= useState({
        accNumber  : "",
        customNumber : "",
        branchID: "",
        balance: "",
        openDate: "",
        accountType: "",
        accountStatus:""
    })
    let navigate = useNavigate();

    const onInputChange=(e)=> {
        setData({...data, [e.target.id]:e.target.value});
        // console.log(newdata)
    }

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
        
        // var { accNumber, customNumber, breanchID, balance, openDate } = document.forms[0];
        // console.log(accNumber)
        setIsSubmitted(true);
        console.log(data)
        navigate("/Menu");
        alert("New Account created")
        // await axios.post("http://localhost:8080/branch", data);


    };



    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Enter Account Number </label>
              <input  id = "accNumber"  value = {data.accNumber}
              placeholder = "Account Number" type="text"  required 
              onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="input-container">
              <label>Enter Customer Number </label>
              <input  id = "customNumber"  value = {data.customNumber}
              placeholder = "Customer Number" type="text"  required 
              onChange={(e) => onInputChange(e)}
              />
            </div>

            
            <div className="input-container">
              <label>Enter Branch ID </label>
              <input  id = "branchID"  value = {data.branchID}
              placeholder = "Branch ID" type="text"  required 
              onChange={(e) => onInputChange(e)}
              />
         
            </div>
            <div className="input-container">
              <label>Balance </label>
              <input  id = "balance"  value = {data.balance}
              placeholder = "Balance" type="text"  required 
              onChange={(e) => onInputChange(e)}
              />
            </div>
            

            <div className="input-container">
              <label>Opening Date </label>
              <input  id = "openDate"  value = {data.openDate}
              placeholder = "Opening Date" type="date"  required 
              onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="input-container">
              <label>Account Type </label>
             
            <select value={data.accountType} onChange={(e) => onInputChange(e)}>
                <hr></hr>
                <option value="Savings">Savings Account</option>
                <option value="Current">Current Account</option>
                
            </select>
            
            </div>

            <div className="input-container">
              <label>Account Status </label>
              
            <select value={data.accountStatus} onChange={(e) => onInputChange(e)}>
                <hr></hr>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
               
            </select>
          
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
        <div className="title">Open Account for registered user</div>

        {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
        {isSubmitted ?  <Navigate to= "./menu" />: renderForm}

        </div>
    </div>
    );

}


export default AddAccount;