import React from "react";
import { useEffect, useState } from "react";
import {Navigate} from "react-router-dom";

const DispCustomers = () => {
 
    return (
      <div>
        <h1>List of Customers</h1>
      </div>
    );
};
export default DispCustomers;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";

// export default function DispBranch() {
//   const [users, setUsers] = useState([]);

//   const { id } = useParams();

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await axios.get("http://localhost:8080/dispBranch");
//     console.log(result.data);
//     setUsers(result.data);
//   };

//   const deleteUser = async (id) => {
//     await axios.delete(`http://localhost:8080/user/${id}`);
//     loadUsers();
//   };

//   return (
//     <div className="container">
//       <div className="py-4">
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">Account Number</th>
//               <th scope="col">Customer Number</th>
//               <th scope="col">Branch ID</th>
//               <th scope="col">Balance</th>
//               <th scope="col">Opnening Date</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr>
//                 <th scope="row" key={index}>
//                   {index + 1}
//                 </th>
//                 <td>{user.accountNumber}</td>
//                 <td>{user.customerNumber}</td>
//                 <td>{user.branchID}</td>
//                 <td>{user.balance}</td>
//                 <td>{user.openingDate}</td>
//                 <td>
//                   <Link
//                     className="btn btn-primary mx-2"
//                     to={`/viewuser/${user.id}`}
//                   >
//                     View
//                   </Link>
//                   <Link
//                     className="btn btn-outline-primary mx-2"
//                     to={`/edituser/${user.id}`}
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     className="btn btn-danger mx-2"
//                     onClick={() => deleteUser(user.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }