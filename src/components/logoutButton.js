// logoutButton.js
import React from "react";
import { useAuth } from "../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./logoutButton.css"; // Make sure to import the CSS file
import axios from "axios";

function LogoutButton() {
  const { authToken, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const headers = {
      'Authorization': authToken
    };
    await axios.post(process.env.REACT_APP_BACKEND_URL + "/auth/logout", null, { headers });
    await logout();
    
    navigate("/");
  };

  return (
    <div className="logout-button-container">
      <Button className="logout-button" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
}

export default LogoutButton;
