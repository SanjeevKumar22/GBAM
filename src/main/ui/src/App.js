import React, {Fragment,useEffect} from 'react';
import  { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Login} from './Component/Login';
import {Menu} from './Component/Menu'

import logo from './logo.svg';
import './App.css';
const App=()=> {
  return (
   <Router>
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
