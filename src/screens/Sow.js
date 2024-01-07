import React, { useState } from "react";
import "./Sow.css";
import ClientInputArea from "../components/clientInputArea";

function SowScreen(props) {
  const [inputAreas, setInputAreas] = React.useState([
    {
      label: "Confidentiality",
      placeholder:
        "Do you have any confidentiality agreements? What areas of the project do they apply to?",
    },
    {
      label: "Project Scope & Objectives",
      placeholder:
        "What are you trying to achieve? What are the goals of the project?",
    },
  ]);

  const addInputArea = () => {
    const newLabel = "Edit this label with a section name";
    setInputAreas([
      ...inputAreas,
      {
        label: newLabel,
        placeholder:
          "Add any information you have about what this section should include",
      },
    ]);

    setInputAreaValues([...inputAreaValues, { label: newLabel, value: "" }]);
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

    // Comment out the fetch call for now
    /*
  const response = await fetch(
    "http://your-backend-url.com/generate-document",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  // Do something with the response data
  */
  };

  return (
    <>
      <div className="div">
        <div className="div-2">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&"
            className="img"
          />
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
          </div>
          <button className="div-18" onClick={generateDocument}>
            Generate Document
          </button>{" "}
        </div>
      </div>
    </>
  );
}

export default SowScreen;
