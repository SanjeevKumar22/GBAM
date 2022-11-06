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

  return (
    <div>
      <h1>List of Customers</h1>
      <table className="table table-bordered">
        <tr>
          <th>branch_id</th>
          <th>branch_city</th>
          <th>branch_name</th>
        </tr>

        {data.map((a, index) => (
          <tr data-index={index}>
            <td>{a.branch_id}</td>
            <td>{a.branch_city}</td>
            <td>{a.branch_name}</td>

            <td>
              <Button className="bg-primary" type="submit" value="Submit">
                delete
              </Button>
            </td>
          </tr>
        ))}
      </table>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default DispBranch;
