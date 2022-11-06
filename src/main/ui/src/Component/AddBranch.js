import React, { Suspense, useState } from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";
import axios from 'axios';
import {useNavigate} from "react-router-dom";


export const AddBranch = () =>{
    let navigate = useNavigate();
    const [data, setData]= useState({
        branchID : "",
        branchName : "",
        branchCity : "",
        city:""
    })
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onInputChange=(e)=> {
        setData({...data, [e.target.id]:e.target.value});
        // console.log(newdata)
    }

    // const handleBranchName = (event) => {
    //     const branch_name = event.target.value;
    //     setBranchName(branch_name);
    //   };
    
    // const handleBranchID = (event) => {
    //     const beranch_id = event.target.value;
    //     setBranchID(beranch_id);
    // };
    
    // const handleBranchAddress = (event) => {
    //     const branch_address = event.target.value;
    //     setBranchAddress(branch_address);
    // };


    const handleSubmit = async (event) => {
        //Prevent page reload
        event.preventDefault();
        // alert("New Branch")
        <Navigate to= "./menu" />
        console.log(data)
        // var { branchID, branchName, branchCity } = document.forms[0];
        setIsSubmitted(true);
        navigate("/Menu");
        alert("New Branch added")
        // await axios.post("http://localhost:8080/branch", data);


    };

    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Branch ID </label>
              <input  id = "branchID"  value = {data.branchID}
              placeholder = "Branch ID" type="text"  required 
              onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="input-container">
              <label>Branch Name </label>
              <input  id = "branchName"  value = {data.branchName}
              placeholder = "Branch Name" type="text"  required 
              onChange={(e) => onInputChange(e)}
              />
           
              
            </div>
            <div className="input-container">
              <label>Branch City </label>
              <input  id = "branchCity"  value = {data.branchCity}
              placeholder = "Branch City" type="text"  required 
              onChange={(e) => onInputChange(e)}
              />
            </div>

            {/* <div>
            <label>
            Pick your favorite flavor:
            <select value={data.city} onChange={(e) => onInputChange(e)}>
                <hr></hr>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            </label>
            </div> */}
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










