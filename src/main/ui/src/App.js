import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
import {Login} from './Component/Login';
import {Menu} from './Component/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
// import { UseNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";


function App() {

  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
      </ul>
      <Fragment>        
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/menu" element={<Menu/>}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;