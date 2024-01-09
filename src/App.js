// App.js
import { Routes, Route } from 'react-router-dom';
import * as React from "react";
import SowScreen from "./screens/Sow";
import LoginScreen from "./screens/LoginScreen";

function App(props) {
  return (
    <Routes>
      <Route path="/" element={ <LoginScreen /> } />
      <Route path="/sow" element={ <SowScreen /> } />
    </Routes>
  );
}

export default App;
