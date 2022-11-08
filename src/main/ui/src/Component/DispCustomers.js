// // import React from "react";
// // import { useEffect, useState } from "react";
// // import Button from "react-bootstrap/Button";
// // import { Pagination } from "./Pagination";
// // import axios from "axios";

// // const DispCustomers = () => {
// //   const [data, setData] = useState([]);
// //   // User is currently on this page
// //   const [currentPage, setCurrentPage] = useState(1);
// //   // No of Records to be displayed on each page
// //   const [recordsPerPage] = useState(10);
// //   const indexOfLastRecord = currentPage * recordsPerPage;
// //   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
// //   // Records to be displayed on the current page
// //   const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
// //   const nPages = Math.ceil(data.length / recordsPerPage);

// //   const getData = async () => {
// //     fetch("http://localhost:8081/allcustomers", {
// //       method: "GET",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //     })
// //       .then(function (response) {
// //         console.log(response);
// //         return response.json();
// //       })
// //       .then(function (myJson) {
// //         console.log(myJson);
// //         setData(myJson);
// //       });

// //     // let response = await axios.get(getAllCustomer());
// //     // console.log(response.json());
// //   };
// //   useEffect(() => {
// //     getData();
// //   }, []);
// //   console.log(data.length);
// //   // const fetchData = () => {
// //   //   axios.get("http://localhost:8081/allcustomers").then(function (response) {
// //   //     // console.log(response.data);
// //   //     a.push(response.data);
// //   //     console.log(a[0]);
// //   //   });
// //   // };
// //   // const a = [];
// //   // useEffect(() => {
// //   //   fetchData();
// //   // }, []);

// //   const deleteCustomer = async (id) => {
// //     console.log(id);
// //     let response = await axios.delete(
// //       `http://localhost:8081/deletecustomer/${id}`
// //     );
// //     window.location.reload(false);
// //   };

// //   return (
// //     <div>
// //       <h1>List of Customers</h1>
// //       <table className="table table-bordered">
// //         <tr>
// //           <th>customer_number</th>
// //           <th>customer_city</th>
// //           <th>customer_contact_no</th>
// //           <th>customer_date_of_birth</th>
// //           <th>first_name</th>
// //           <th>last_name</th>
// //           <th>middlename</th>
// //           <th>occupation</th>
// //         </tr>

// //         {data.length > 0 ? (
// //           data.map((a, index) => (
// //             <tr data-index={index}>
// //               <td>{a.customer_number}</td>
// //               <td>{a.customer_city}</td>
// //               <td>{a.customer_contact_no}</td>
// //               <td>{a.customer_date_of_birth}</td>
// //               <td>{a.customer_number}</td>
// //               <td>{a.first_name}</td>
// //               <td>{a.last_name}</td>
// //               <td>{a.middlename}</td>
// //               <td>{a.occupation}</td>
// //               <td>
// //                 <Button
// //                   className="bg-primary"
// //                   type="submit"
// //                   value="Submit"
// //                   onClick={() => deleteCustomer(a.customer_number)}
// //                 >
// //                   delete
// //                 </Button>
// //               </td>
// //             </tr>
// //           ))
// //         ) : (
// //           <div className="text-center">There is no Customer Details</div>
// //         )}
// //       </table>
// //       <Pagination
// //         nPages={nPages}
// //         currentPage={currentPage}
// //         setCurrentPage={setCurrentPage}
// //       />
// //     </div>
// //   );
// // };
// // export default DispCustomers;
// import React from "react";
// import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import { Pagination } from "./Pagination";
// import axios from "axios";

// const DispCustomers = () => {
//   const [data, setData] = useState([]);
//   // User is currently on this page
//   const [currentPage, setCurrentPage] = useState(1);
//   // No of Records to be displayed on each page
//   const [recordsPerPage] = useState(10);
//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   // Records to be displayed on the current page
//   const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
//   const nPages = Math.ceil(data.length / recordsPerPage);

//   const getData = async () => {
//     fetch("http://localhost:8081/allaccounts", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then(function (response) {
//         console.log(response);
//         return response.json();
//       })
//       .then(function (myJson) {
//         console.log(myJson);
//         setData(myJson);
//       });

//     // let response = await axios.get(getAllCustomer());
//     // console.log(response.json());
//   };
//   useEffect(() => {
//     getData();
//   }, []);
//   console.log(data.length);
//   // const fetchData = () => {
//   //   axios.get("http://localhost:8081/allcustomers").then(function (response) {
//   //     // console.log(response.data);
//   //     a.push(response.data);
//   //     console.log(a[0]);
//   //   });
//   // };
//   // const a = [];
//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   const deleteCustomer = async (id) => {
//     console.log(id);
//     let response = await axios.delete(
//       `http://localhost:8081/closeaccount/${id}`
//     );
//     window.location.reload(false);
//   };

//   return (
//     <div>
//       <h1>List of Customers</h1>
//       <table className="table table-bordered">
//         <tr>
//           <th>customer_number</th>
//           <th>account_number</th>
//           <th>branch_id</th>
//           <th>balance</th>
//           <th>opening Date</th>

//         </tr>

//         {data.length > 0 ? (
//           data.map((a, index) => (
//             <tr data-index={index}>
//               <td>{a.customer_number}</td>
//               <td>{a.account_number}</td>
//               <td>{a.branch_id}</td>
//               <td>{a.balance}</td>
//               <td>{a.opening_date}</td>

//               <td>
//                 <Button
//                   className="bg-primary"
//                   type="submit"
//                   value="Submit"
//                   onClick={() => deleteCustomer(a.account_number)}
//                 >
//                   delete
//                 </Button>
//               </td>
//             </tr>
//           ))
//         ) : (
//           <div className="text-center">There is no Customer Details</div>
//         )}
//       </table>
//       <Pagination
//         nPages={nPages}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />
//     </div>
//   );
// };
// export default DispCustomers;
// import React from "react";
// import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import { Pagination } from "./Pagination";
// import axios from "axios";

// const DispCustomers = () => {
//   const [data, setData] = useState([]);
//   // User is currently on this page
//   const [currentPage, setCurrentPage] = useState(1);
//   // No of Records to be displayed on each page
//   const [recordsPerPage] = useState(10);
//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   // Records to be displayed on the current page
//   const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
//   const nPages = Math.ceil(data.length / recordsPerPage);

//   const getData = async () => {
//     fetch("http://localhost:8081/allcustomers", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then(function (response) {
//         console.log(response);
//         return response.json();
//       })
//       .then(function (myJson) {
//         console.log(myJson);
//         setData(myJson);
//       });

//     // let response = await axios.get(getAllCustomer());
//     // console.log(response.json());
//   };
//   useEffect(() => {
//     getData();
//   }, []);
//   console.log(data.length);
//   // const fetchData = () => {
//   //   axios.get("http://localhost:8081/allcustomers").then(function (response) {
//   //     // console.log(response.data);
//   //     a.push(response.data);
//   //     console.log(a[0]);
//   //   });
//   // };
//   // const a = [];
//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   const deleteCustomer = async (id) => {
//     console.log(id);
//     let response = await axios.delete(
//       `http://localhost:8081/deletecustomer/${id}`
//     );
//     window.location.reload(false);
//   };

//   return (
//     <div>
//       <h1>List of Customers</h1>
//       <table className="table table-bordered">
//         <tr>
//           <th>customer_number</th>
//           <th>customer_city</th>
//           <th>customer_contact_no</th>
//           <th>customer_date_of_birth</th>
//           <th>first_name</th>
//           <th>last_name</th>
//           <th>middlename</th>
//           <th>occupation</th>
//         </tr>

//         {data.length > 0 ? (
//           data.map((a, index) => (
//             <tr data-index={index}>
//               <td>{a.customer_number}</td>
//               <td>{a.customer_city}</td>
//               <td>{a.customer_contact_no}</td>
//               <td>{a.customer_date_of_birth}</td>
//               <td>{a.customer_number}</td>
//               <td>{a.first_name}</td>
//               <td>{a.last_name}</td>
//               <td>{a.middlename}</td>
//               <td>{a.occupation}</td>
//               <td>
//                 <Button
//                   className="bg-primary"
//                   type="submit"
//                   value="Submit"
//                   onClick={() => deleteCustomer(a.customer_number)}
//                 >
//                   delete
//                 </Button>
//               </td>
//             </tr>
//           ))
//         ) : (
//           <div className="text-center">There is no Customer Details</div>
//         )}
//       </table>
//       <Pagination
//         nPages={nPages}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />
//     </div>
//   );
// };
// export default DispCustomers;
import React from "react";
import { useEffect, useState, navigate } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Pagination } from "./Pagination";
import axios from "axios";
import { deleteloan } from "../api";
import Loan from "./Loan";
import { useNavigate } from "react-router-dom";
const DispCustomers = () => {
  const [data, setData] = useState([]);
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Records to be displayed on the current page
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);
  const [isdelete, setdelete] = useState(false);

  const getData = async () => {
    fetch("http://localhost:8081/allaccounts", {
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
  useEffect(() => {
    getData();
  }, []);
  console.log(data.length);
  // const fetchData = () => {
  //   axios.get("http://localhost:8081/allcustomers").then(function (response) {
  //     // console.log(response.data);
  //     a.push(response.data);
  //     console.log(a[0]);
  //   });
  // };
  // const a = [];
  // useEffect(() => {
  //   fetchData();
  // }, []);
  let navigate = useNavigate();
  const deleteCustomer = async (id) => {
    console.log(id);
    let response = await axios.delete(
      `http://localhost:8081/closeaccount/${id}`
    );
    let dele = await deleteloan(id);

    setdelete(true);
    window.location.reload(false);
  };

  return (
    <div className="container">
      <h1 className="text-center m-3">List of Customers</h1>
      {isdelete ? (
        <div
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Account Successfully Deleted</strong>
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ) : (
        ""
      )}
      <table className="table table-bordered text-center  ">
        <tr>
          <th>customer_number</th>
          <th>account_number</th>
          <th>branch_id</th>
          <th>balance</th>
          <th>opening Date</th>
          <th>Delete Account</th>
          <th>View Loan</th>
        </tr>

        {data.length > 0
          ? data.map((a, index) => (
              <tr data-index={index}>
                <td>{a.customer_number}</td>
                <td>{a.account_number}</td>
                <td>{a.branch_id}</td>
                <td>{a.balance}</td>
                <td>{a.opening_date}</td>

                <td>
                  <Button
                    className="bg-primary"
                    type="submit"
                    value="Submit"
                    onClick={() => deleteCustomer(a.account_number)}
                  >
                    delete
                  </Button>
                </td>
                <td>
                  <Link
                    to={`Loan/${a.customer_number}`}
                    style={{ textDecoration: "none" }}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))
          : ""}
      </table>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default DispCustomers;
