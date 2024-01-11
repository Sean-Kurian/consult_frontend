import React, { useState } from "react";
import FileList from "../components/fileList.js";
import LogoutButton from "../components/logoutButton.js";
import "./FileScreen.css";

function FileScreen(props) {
  return (
    <div className="div">
      <div className="div-2">
        <LogoutButton />
        <div className="div-3">
          <FileList />
        </div>
      </div>
    </div>
  );
}

export default FileScreen;
