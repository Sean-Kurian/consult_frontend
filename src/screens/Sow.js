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

  const handleInputChange = (index, event) => {
    const newInputAreaValues = [...inputAreaValues];
    newInputAreaValues[index] = {
      label: newInputAreaValues[index].label,
      value: event.target.value,
    };
    setInputAreaValues(newInputAreaValues);
  };

  const [organization, setOrganization] = useState("");
  const [clientName, setClientName] = useState("");
  const [inputAreaValues, setInputAreaValues] = useState(
    inputAreas.map((inputArea) => ({ label: inputArea.label, value: "" }))
  );

  const removeInputArea = (indexToRemove) => {
    setInputAreas(inputAreas.filter((_, index) => index !== indexToRemove));
  };

  const generateDocument = async () => {
    const requestBody = {
      organization,
      client: clientName,
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
            {inputAreas.map((inputArea, index) => (
              <div key={index} className="input-area">
                <ClientInputArea
                  label={inputArea.label}
                  placeholder={inputArea.placeholder}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setInputAreaValues((prevValues) =>
                      prevValues.map((item, idx) =>
                        idx === index ? { ...item, value: newValue } : item
                      )
                    );
                  }}
                />
                <div className="button-container">
                  <button
                    className="remove-button"
                    onClick={() => removeInputArea(index)}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
            <button className="add-button" onClick={addInputArea}>
              +
            </button>{" "}
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
