
import React, {Fragment,useEffect} from 'react';
import  { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Component/Login';
import Menu from './Component/Menu';
import {AddAccount} from './Component/AddAccount';
import AddBranch from './Component/AddBranch';
import DispBranch from './Component/DispBranch';
import DispCustomers from './Component/DispCustomers';


  return (

   <Router>
    <Fragment>
       
      <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/Menu" element={<Menu/>}/>
      <Route exact path ="/AddAccount" element ={<AddAccount />} />
      <Route exact path ="/AddBranch" element ={<AddBranch />} />
      <Route exact path ="/DispBranch" element ={<DispBranch />} />
      <Route exact path ="/DispCustomers" element ={<DispCustomers />} />

      </Routes>
    </Fragment>
   </Router>

  );
}

export default App;