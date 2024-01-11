// App.js
import { Routes, Route } from 'react-router-dom';
import * as React from "react";
import SowScreen from "./screens/Sow";
import LoginScreen from "./screens/LoginScreen";
import FileScreen from "./screens/FileScreen";
import PostUploadScreen from './screens/PostUploadScreen';

function App(props) {
  return (
    <Routes>
      <Route path="/" element={ <LoginScreen /> } />
      <Route path="/sow" element={ <SowScreen /> } />
      <Route path="/files" element={ <FileScreen /> } />
      <Route path="/postupload" element={ <PostUploadScreen /> } />
    </Routes>
  );
}

export default App;
