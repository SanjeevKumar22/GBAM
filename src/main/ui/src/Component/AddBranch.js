// // import React, { Suspense, useState } from "react";
// // import "./Login.css";
// // import { Navigate } from "react-router-dom";
// // import axios from 'axios';


// // export const AddBranch = () =>{

// //     const [isSubmitted, setIsSubmitted] = useState(false);

// //     const handleSubmit = (event) => {
// //         //Prevent page reload
// //         event.preventDefault();
// //         <Navigate to= "./menu" />
// //         var { branchID, branchName, branchAddress } = document.forms[0];
// //         <div>{branchID}</div>
// //         setIsSubmitted(true);

// //     };

// //     const renderForm = (
// //         <div className="form">
// //           <form onSubmit={handleSubmit}>
// //             <div className="input-container">
// //               <label>Branch ID </label>
// //               <input type="text" name="branchID" required />
              
           
// //             </div>
// //             <div className="input-container">
// //               <label>Branch Name </label>
// //               <input type="text" name="branchName" required />
         
// //             </div>
// //             <div className="input-container">
// //               <label>Branch Address </label>
// //               <input type="text" name="branchAddress" required />
// //             </div>

// //             <div className="button-container">
// //               <input type="submit" />
// //             </div>
// //           </form>
// //         </div>
// //       );

// //     return (
// //     <div className="app">
// //         <div className="AccountOpening-form">
// //         <div className="title">Add Branch Details</div>
// //         {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
// //         {isSubmitted ?  <Navigate to= "/menu" />: renderForm}

// //         </div>
// //     </div>
// //     );

// // }


// // export default AddBranch;


// import React, { Suspense, useState } from "react";
// import "./Login.css";
// import { Navigate } from "react-router-dom";
// import axios from 'axios';


// export const AddBranch = () =>{

//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const handleSubmit = (event) => {
//         //Prevent page reload
//         event.preventDefault();
//         <Navigate to= "/menu" />
//         var { branchID, branchName, branchAddress } = document.forms[0];
//         <div>{branchID}</div>
//         setIsSubmitted(true);

//     };

//     const renderForm = (
//         <div className="form">
//           <form onSubmit={handleSubmit}>
//             <div className="input-container">
//               <label>Branch ID </label>
//               <input type="text" name="branchID" required />
              
           
//             </div>
//             <div className="input-container">
//               <label>Branch Name </label>
//               <input type="text" name="branchName" required />
         
//             </div>
//             <div className="input-container">
//               <label>Branch Address </label>
//               <input type="text" name="branchAddress" required />
//             </div>

//             <div className="button-container">
//               <input type="submit" />
//             </div>
//           </form>
//         </div>
//       );

//     return (
//     <div className="app">
//         <div className="AccountOpening-form">
//         <div className="title">Add Branch Details</div>
//         {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
//         {isSubmitted ?  <Navigate to= "/menu" />: renderForm}

//         </div>
//     </div>
//     );

// }


// export default AddBranch;

import React, { useState } from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";
import { addBranch } from "../api";

export const AddBranch = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [branch_id, setBranch_id] = useState("");
  const [branch_city, setBranch_city] = useState("");
  const [branch_name, setbranch_name] = useState("");

  const handleSubmit = async (e) => {
    //Prevent page reload
    e.preventDefault();
    const admin = {
      branch_id,
      branch_city,
      branch_name,
    };
    console.log(admin);
    let response = await addBranch(admin);
    setIsSubmitted(true);
    if (!response.data) {
      setIsSubmitted(false);
    }
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>BranchID </label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => setBranch_id(e.target.value)}
          >
            <option selected>Select Branch ID</option>
            <option value="b001">b001</option>
          </select>
        </div>
        <div className="input-container">
          <label>Branch Name </label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => setbranch_name(e.target.value)}
          >
            <option selected>Select Branch Name</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div className="input-container">
          <label>Branch City </label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => setBranch_city(e.target.value)}
          >
            <option selected>Select Branch City</option>
            <option value="blore">Blore</option>
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
        <div className="title">Add Branch Details</div>
        {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
        {isSubmitted ? <Navigate to="/menu" /> : renderForm}
      </div>
    </div>
  );
};

export default AddBranch;