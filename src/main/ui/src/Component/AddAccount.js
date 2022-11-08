// import React, { Suspense, useState } from "react";
// import "./Login.css";
// import { Navigate } from "react-router-dom";
// import axios from 'axios';
// import {useNavigate} from "react-router-dom";



// export const AddAccount = () =>{
    
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     let navigate = useNavigate();

//     const menuRouterHandler = (event, route) => {
//       console.log("Button pressed: " + route);    
//       navigate("/"+route);
//     }

//     const handleSubmit = (event) => {
//         //Prevent page reload
//         event.preventDefault();
    
//         var { accNumber, customNumber, breanchID, balance, openDate } = document.forms[0];
//         setIsSubmitted(true);
      
//     };



//     const renderForm = (
//         <div className="form">
//           <form onSubmit={handleSubmit}>
//             <div className="input-container">
//               <label>Enter Account Number </label>
//               <input type="text" name="accNumber" required />
           
//             </div>
//             <div className="input-container">
//               <label>Select Customer Number </label>
//               <input type="text" name="customNumber" required />
         
//             </div>
//             <div className="input-container">
//               <label>BranchID </label>
//               <input type="text" name="branchID" required />
         
//             </div>
//             <div className="input-container">
//               <label>Balance </label>
//               <input type="integer" name="balance" required />
//             </div>

//             <div className="input-container">
//               <label>Opening Date </label>
//               <input type="text" name="openDate" required />
//             </div>
//             {/* <div className="button-container">
//             <input type="submit" />
//             </div> */}
//             <button onClick={event => menuRouterHandler(event, "Menu")}>Submit</button>

//           </form>
//         </div>
//       );

//     return (
//     <div className="app">
//         <div className="AccountOpening-form">
//         <div className="title">Open Account</div>

//         {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
//         {isSubmitted ?  <Navigate to= "./menu" />: renderForm}

//         </div>
//     </div>
//     );

// }


// export default AddAccount;


import React, { useEffect, useState } from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addAcc } from "../api";
export const AddAccount = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [account_number, setAcc_no] = useState("");
  const [balance, setBalc] = useState("");
  const [opening_date, setDate] = useState("");
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [customer_number, setCustomer_number] = useState("");
  const [branch_id, setBranch_id] = useState("");

  let navigate = useNavigate();

  const menuRouterHandler = (event, route) => {
    console.log("Button pressed: " + route);
    navigate("/" + route);
  };

  // const handleSubmit = (event) => {
  //   //Prevent page reload
  //   event.preventDefault();

  //   var { accNumber, customNumber, breanchID, balance, openDate } =
  //     document.forms[0];
  //   setIsSubmitted(true);
  // };

  const handleSubmit = async (e) => {
    //Prevent page reload
    e.preventDefault();
    const admin = {
      customer_number,
      account_number,
      balance,
      branch_id,
      opening_date,
    };
    console.log(admin);
    let response = await addAcc(admin);
    setIsSubmitted(true);
    if (!response.data) {
      setIsSubmitted(true);
    }
  };

  const getCustData = async () => {
    fetch("http://localhost:8081/allcustomers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });

    // let response = await axios.get(getAllCustomer());
    // console.log(response.json());
  };
  const getBranchData = async () => {
    fetch("http://localhost:8081/allbranches", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData1(myJson);
      });

    // let response = await axios.get(getAllCustomer());
    // console.log(response.json());
  };
  useEffect(() => {
    getCustData();
    getBranchData();
  }, []);

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Enter Account Number </label>
          <input
            type="text"
            name="accNumber"
            required
            onChange={(e) => setAcc_no(e.target.value)}
          />
        </div>

        {/* <div className="input-container">
              <label>Select Customer Number </label>
              <input type="text" name="customNumber" required />
         
            </div> */}
        <label> customer ID </label>
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(e) => setCustomer_number(e.target.value)}
        >
          <option selected>Select customer ID</option>
          {data.length > 0 ? (
            data.map((a) => (
              <option value={a.customer_number} name="customer_number">
                {a.customer_number}
              </option>
            ))
          ) : (
            <div>"customer number doesnot exist"</div>
          )}
        </select>

        <div className="input-container">
          <label>BranchID </label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => setBranch_id(e.target.value)}
          >
            <option selected>Select Branch ID</option>
            {data1.length > 0 ? (
              data1.map((b) => (
                <option value={b.branch_id}>{b.branch_id}</option>
              ))
            ) : (
              <div>"branch_id doesnot exist"</div>
            )}
          </select>
        </div>

        <div className="input-container">
          <label>Balance </label>
          <input
            type="integer"
            name="balance"
            required
            onChange={(e) => setBalc(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label>Opening Date </label>
          <input
            type="date"
            name="openDate"
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        {/* <div className="button-container">
            <input type="submit" />
            </div> */}
        {/* <button onClick={(event) => menuRouterHandler(event, "Menu")}>
          Submit
        </button> */}
        <button>Submit</button>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="AccountOpening-form">
        <div className="title">Open Account</div>

        {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
        {isSubmitted ? <Navigate to="/menu" /> : renderForm}
      </div>
    </div>
  );
};

export default AddAccount;