import React from "react";

const labelStyle = {
  color: "#170f49",
  alignSelf: "start",
  whiteSpace: "nowrap",
  margin: "51px 0 0 18px",
  font: "500 18px/111% DM Sans, -apple-system, Roboto, Helvetica, sans-serif",
  textAlign: "center",
  width: "100%",
};

const textareaStyle = {
  color: "#6f6c90",
  whiteSpace: "pre-wrap",
  borderRadius: "46px",
  border: "1px solid #eff0f6",
  boxShadow: "0px 2px 6px 0px rgba(19, 18, 66, 0.07)",
  backgroundColor: "#fff",
  alignSelf: "start",
  width: "568px",
  maxWidth: "100%",
  justifyContent: "center",
  alignItems: "start",
  margin: "21px 0 0 18px",
  padding: "25px 60px 25px 21px",
  font: "400 18px/111% DM Sans, -apple-system, Roboto, Helvetica, sans-serif",
};

function ClientInputArea({ label, placeholder, onChange }) {
  const [editableLabel, setEditableLabel] = React.useState(label);
  const [textareaValue, setTextareaValue] = React.useState("");

  const handleLabelChange = (event) => {
    const newLabel = event.target.innerText;
    setEditableLabel(newLabel);
    onChange({ target: { value: newLabel } });
  };

  const handleTextareaChange = (event) => {
    const newValue = event.target.value;
    setTextareaValue(newValue);
    onChange({ target: { value: newValue } });
  };

  return (
    <>
      <div
        style={labelStyle}
        contentEditable
        suppressContentEditableWarning
        onBlur={handleLabelChange}
      >
        {editableLabel}
      </div>
      <textarea
        style={textareaStyle}
        placeholder={placeholder}
        rows="3"
        onChange={handleTextareaChange}
        value={textareaValue}
      />
    </>
  );
}
export default ClientInputArea;
