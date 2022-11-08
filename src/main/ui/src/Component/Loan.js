import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteloan } from "../api";
const Loan = () => {
  const [data, setData] = useState([]);
  const [isloan, setIsloan] = useState(true);
  const { id } = useParams();
  const getLoandata = async (id) => {
    fetch(`http://localhost:8081/loan_amt/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        if (response.status >= 400) {
          throw new Error("Server responds with error!");
        }
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      })
      .catch((error) => {
        setIsloan(false);
      });
  };

  console.log(data.status);
  useEffect(() => {
    getLoandata(id);
  }, []);
  return (
    <div className="container text-center">
      <h1>Loan Details</h1>
      <table className="table table-hover">
        <tr>
          <th>customer_number</th>
          <th>branch_id</th>
          <th>loam Amount</th>
        </tr>
        {isloan ? (
          <tr>
            <td>{data.customer_number}</td>
            <td>{data.branch_id}</td>
            <td>{data.loan_amount}</td>
            <td>{data.status}</td>
          </tr>
        ) : (
          <div className="text-center">
            {id} customer number not having any loans
          </div>
        )}
      </table>
    </div>
  );
};
export default Loan;
