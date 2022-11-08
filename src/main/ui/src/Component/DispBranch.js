// import React from "react";
// import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import { Pagination } from "./Pagination";
// import axios from "axios";

// const DispBranch = () => {
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
//     fetch("http://localhost:8081/allbranches", {
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
//   const deleteBranch = async (id) => {
//     console.log(id);
//     let res = await axios.delete(`http://localhost:8081/deletebranch/${id}`);
//     window.location.reload(false);
//   };

//   return (
//     <div>
//       <h1>List of Branches</h1>
//       <table className="table table-bordered">
//         <tr>
//           <th>branch_id</th>
//           <th>branch_city</th>
//           <th>branch_name</th>
//         </tr>

//         {data.length > 0 ? (
//           data.map((a, index) => (
//             <tr data-index={index}>
//               <td>{a.branch_id}</td>
//               <td>{a.branch_city}</td>
//               <td>{a.branch_name}</td>

//               <td>
//                 <Button
//                   className="bg-primary"
//                   type="submit"
//                   value="Submit"
//                   onClick={() => deleteBranch(a.branch_id)}
//                 >
//                   delete
//                 </Button>
//               </td>
//             </tr>
//           ))
//         ) : (
//           <div>There is no branch details</div>
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

// export default DispBranch;
import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Pagination } from "./Pagination";
import axios from "axios";

const DispBranch = () => {
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

  const getData = async () => {
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
  const deleteBranch = async (id) => {
    console.log(id);
    let res = await axios.delete(`http://localhost:8081/deletebranch/${id}`);
    window.location.reload(true);
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-center">List of Branches</h1>
        <table className="table table-bordered">
          <tr>
            <th>branch_id</th>
            <th>branch_city</th>
            <th>branch_name</th>
            <th>delete branch</th>
          </tr>

          {data.length > 0 ? (
            data.map((a, index) =>
              a.branch_id != "" ? (
                <tr data-index={index}>
                  <td>{a.branch_id}</td>
                  <td>{a.branch_city}</td>
                  <td>{a.branch_name}</td>

                  <td>
                    <Button
                      className="bg-primary"
                      type="submit"
                      value="Submit"
                      onClick={() => deleteBranch(a.branch_id)}
                    >
                      delete
                    </Button>
                  </td>
                </tr>
              ) : (
                ""
              )
            )
          ) : (
            <div>There is no branches</div>
          )}
        </table>
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default DispBranch;
