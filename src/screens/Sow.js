import React, { useState } from "react";
import "./Sow.css";
import ClientInputArea from "../components/clientInputArea";
import DialogBox from "../components/dialogBox";
import LogoutButton from "../components/logoutButton.js";
import { useAuth } from "../context/AuthContext.js";

function SowScreen() {
  const { authToken, login, logout } = useAuth();

  const [inputAreas, setInputAreas] = React.useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const addInputArea = (newLabel) => {
    const id = Math.random().toString(); // generate a unique id
    setInputAreas([
      ...inputAreas,
      {
        id: id,
        label: newLabel,
        placeholder:
          "Add any information you have about what this section should include",
      },
    ]);

    setInputAreaValues([
      ...inputAreaValues,
      { id: id, label: newLabel, value: "" },
    ]);
  };

  const removeInputArea = (id) => {
    setInputAreas((prevInputAreas) =>
      prevInputAreas.filter((item) => item.id !== id)
    );
    setInputAreaValues((prevInputAreaValues) =>
      prevInputAreaValues.filter((item) => item.id !== id)
    );
  };

  const handleInputChange = (id, value) => {
    setInputAreaValues(
      inputAreaValues.map((item) =>
        item.id === id ? { ...item, value: value } : item
      )
    );
  };

  const [organization, setOrganization] = useState("");
  const [client, setClientName] = useState("");
  const [confidentiality, setConfidentiality] = useState("");
  const [projectScope, setProjectScope] = useState("");
  const [projectSolution, setProjectSolution] = useState("");
  const [payment, setPayment] = useState("");
  const [additonalInfo, setAdditionalInfo] = useState("");
  const [inputAreaValues, setInputAreaValues] = useState(
    inputAreas.map((inputArea) => ({ label: inputArea.label, value: "" }))
  );

  const generateDocument = async () => {
    console.log(inputAreas);
    console.log(inputAreaValues);
    const requestBody = {
      organization: organization,
      client: client,
      confidentiality: confidentiality,
      projectScope: projectScope,
      projectSolution: projectSolution,
      payment: payment,
      additonalInfo: additonalInfo,
      ...inputAreaValues.reduce(
        (obj, item) => ({ ...obj, [item.label]: item.value }),
        {}
      ),
    };

    console.log(requestBody);

    const response = await fetch("http://localhost:5000/sow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
  };

  return (
    // TODO: look into verifying the token in the future for pages that we absolutely want to hide.
    authToken ? (
      <>
        <LogoutButton />
        <div className="div">
          <div className="div-2">
            <div className="div-3">Generate a Statement of Work</div>
            <div className="div-4">Tell us about your project</div>
            <div className="div-5">
              Please fill the form below to receive a statement of work for your
              team. Please be as descriptive and informative as possible.
            </div>
            <div className="div-6">
              <div className="div-7">Project details</div>
              <div className="div-9" />
              <div className="input-container">
                <div>
                  <div className="div-10">Your Organization</div>
                  <input
                    className="div-11"
                    placeholder="Your Organization's Name"
                    onChange={(e) => setOrganization(e.target.value)}
                  />
                </div>
                <div>
                  <div className="div-12">Client Name</div>
                  <input
                    className="div-13"
                    placeholder="Client's Name"
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
              </div>
              <ClientInputArea
                label="Confidentiality"
                placeholder="Do you have any confidentiality agreements? What areas of the project do they apply to?"
                onChange={(e) => setConfidentiality(e.target.value)}
              />
              <ClientInputArea
                label="Project Scope & Objectives"
                placeholder="What are you trying to achieve? What are the goals of the project?"
                onChange={(e) => setProjectScope(e.target.value)}
              />
              <ClientInputArea
                label="Solution Overview"
                placeholder="How do you intend to solve the problem? What are the key features of the solution?"
                onChange={(e) => setProjectSolution(e.target.value)}
              />
              <ClientInputArea
                label="Payment"
                placeholder="What is the payment schedule? What are the payment terms? What is the payment method?"
                onChange={(e) => setPayment(e.target.value)}
              />
              <ClientInputArea
                label="Additional Information"
                placeholder="What else should we know about the project? Is there any more information that is important for a statement of work?"
                onChange={(e) => setAdditionalInfo(e.target.value)}
              />
              {inputAreas.map((inputArea) => (
                <div key={inputArea.id}>
                  <ClientInputArea
                    label={inputArea.label}
                    placeholder={inputArea.placeholder}
                    onChange={(e) =>
                      handleInputChange(inputArea.id, e.target.value)
                    }
                  />
                  <button
                    className="removeSection"
                    onClick={() => removeInputArea(inputArea.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                className="addSection"
                onClick={() => setDialogOpen(true)}
              >
                Add Section
              </button>
              <DialogBox
                isOpen={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onConfirm={(newLabel) => {
                  addInputArea(newLabel);
                  setDialogOpen(false);
                }}
              />
            </div>
            <button className="div-18" onClick={generateDocument}>
              Generate Document
            </button>{" "}
          </div>
        </div>
      </>
    ) : (
      <p>You aren't authorized to see this page.</p>
    )
  );
}

export default SowScreen;
