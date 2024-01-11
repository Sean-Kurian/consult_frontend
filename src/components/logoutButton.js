// logoutButton.js
import React from "react";
import { useAuth } from "../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <Button variant="secondary" onClick={handleLogout}>
      Log Out
    </Button>
  );
}

export default LogoutButton;
