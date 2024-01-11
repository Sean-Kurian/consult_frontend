// logoutButton.js
import React from "react";
import { useAuth } from "../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./logoutButton.css"; // Make sure to import the CSS file

function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
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
