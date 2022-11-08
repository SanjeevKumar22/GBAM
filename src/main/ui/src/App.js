import React, { Fragment, useEffect } from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Menu from "./Component/Menu";
import { AddAccount } from "./Component/AddAccount";
import AddBranch from "./Component/AddBranch";
import DispBranch from "./Component/DispBranch";
import DispCustomers from "./Component/DispCustomers";
import { render } from "react-dom";
import Navbar from "./Component/Navbar";
import PrivateRoute from "./Component/ProtectedRoute";
import Loan from "./Component/Loan";
function App() {
  return (
    <Router>
      <Navbar />
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/Menu"
            element={
              <PrivateRoute>
                <Menu />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/AddAccount"
            element={
              <PrivateRoute>
                <AddAccount />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/AddBranch"
            element={
              <PrivateRoute>
                <AddBranch />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/DispBranch"
            element={
              <PrivateRoute>
                <DispBranch />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/DispCustomers"
            element={
              <PrivateRoute>
                <DispCustomers />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/DispCustomers/Loan/:id"
            element={
              <PrivateRoute>
                <Loan />
              </PrivateRoute>
            }
          />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
