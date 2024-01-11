import React, { useState } from "react";
import "./Sow.css";
import LogoutButton from "../components/logoutButton.js";
import { useAuth } from "../context/AuthContext.js";

function PostUploadScreen() {
    const { authToken } = useAuth();

    return (authToken ? (
        <>
          <div className="div">
            <div className="div-2">
              <LogoutButton />
              <div className="div-3">Upload in progress</div>
              <div className="div-4">Your file upload is in progress, when it is done, it will appear on the <a href = "/files">Files List page</a>.</div>
            </div>
          </div>
        </>
      ) : (
        <p>You aren't authorized to see this page.</p>
      ));
}

export default PostUploadScreen;