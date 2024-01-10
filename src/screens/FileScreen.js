import React, { useState } from "react";
import FileList from "../components/fileList.js";
import "./File.css";

function FileScreen(props) {
    return (
        <div className="div">
            <div className="div-2">
                <div className="div-3">
                    <FileList />
                </div>
            </div>
        </div>
    );
}

export default FileScreen;