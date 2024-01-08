import React, { useState } from "react";
import "./dialogBox.css";

function DialogBox({ isOpen, onClose, onConfirm }) {
  const [input, setInput] = useState("");

  const handleConfirm = () => {
    onConfirm(input);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <h2>Enter the name for the new section</h2>
        <input
          className="dialog-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="dialog-buttons">
          <button className="dialog-button" onClick={handleConfirm}>
            OK
          </button>
          <button className="dialog-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DialogBox;
