import React, {useEffect, useState} from 'react';

import Home from './pages/home';
//import react routers for SPA different render pages
import {BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {


  return (<div>

    <Router>
      <Routes>
        <Route path="/" element= {<Home/>}></Route>
      </Routes>
    </Router>
   

  </div>);


}

export default App;