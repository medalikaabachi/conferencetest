
import React, { useState } from "react";

import AppNav from "./components/AppNav";
import{Routes,Route} from "react-router-dom"
import DashBoard from './components/pages/DashBoard';
import Home from './components/pages/Home';
import {useDispatch} from "react-redux"
import { getAuthUser } from './redux/actions/userAction';
import { useEffect } from 'react';
import ConfList from './components/pages/ConfList';
const App = () => {
 
const dispatch=useDispatch()

useEffect(()=>dispatch(getAuthUser()),[])
  return (

    <div>
      <AppNav />
      <Routes>
  <Route path="/"  element={<Home />}/>
  <Route  path="/dashboard" element={<DashBoard />}/>
  <Route path="/ConferanceList" element={<ConfList />}/>
</Routes>
    </div>
  );
};

export default App;


