import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

/**
 * Project Title and Description: A brief title and a detailed description of the project, including its objectives and scope.
 * Background Information: Any relevant history or context that sets the stage for the project.
 * Scope of Work: Detailed information about the work to be performed, including specific tasks or deliverables.
 * Project Timeline: Key milestones and deadlines for the project.
 * Roles and Responsibilities: Information about the parties involved, their roles, and their responsibilities in the project.
 * Resources Required: Details of any resources (like materials, software, etc.) needed for the project.
 * Budget and Payment Terms: Information on the project budget, payment schedule, and terms.
 * Standards and Testing Requirements: Any specific industry standards to be met and testing or quality assurance processes to be followed.
 * Acceptance Criteria: Criteria for the acceptance of deliverables and completion of the project.
 * Change Management Process: Procedures for handling changes to the project scope, timeline, or budget.
 * Legal and Regulatory Compliance: Any legal or regulatory requirements that must be adhered to.
 * Risk Management: Identification of potential risks and plans for managing them.
 * Confidentiality and Security Requirements: Any confidentiality or security measures required for the project.
 * Termination Clauses: Conditions under which the contract or project can be terminated.
 * Sign-off Section: Space for the signatures of the parties involved, indicating agreement to the terms of the SoW.
 * Contact Information: Contact details of the key personnel or departments involved in the project.
 * Appendices or Additional Documents: Any supplementary information or documents referenced in the SoW.
 * @returns
 */

const Home = (props) => {
  // State to hold form data
  const [formData, setFormData] = useState({
    formTitle: "",
    formDescription: "",
    formBgInfo: "",
    formScope: "",
    formProjectTimeline: "",
    formRolesResponsibility: "",
    formReqResources: "",
    formBudgetPaymentTerm: "", //might have to split these into two
    formTestingRequirements: "",
    formAcceptanceCriteria: "",
    formCMT: "",
    formCompliance: "",
    formRiskManagement: "",
    formSecurityReq: "",
    formTerminationClause: "",
    formSignoff: "",
    formContactInfo: "",
    formAppendix: "",
  });

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // we need to submit data to backend over here
    // probablly using axios to call
    console.log("Form submitted:", formData);
  };

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Project Title</Form.Label>
        <Form.Control
          type="text"
          name="formTitle"
          value={formData.formTitle}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Project Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="formDescription"
          value={formData.formDescription}
          onChange={handleChange}
        />
      </Form.Group>
      {/* // */}

      <Form.Group controlId="formScope">
        <Form.Label>Scope of work</Form.Label>
        <Form.Control
          type="text"
          name="formScope"
          value={formData.formScope}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formTimeline">
        <Form.Label>Project Timeline</Form.Label>
        <Form.Control
          type="text"
          name="formTimeline"
          value={formData.formProjectTimeline}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formRolesResponsibility">
        <Form.Label>Roles and Responsibilities:</Form.Label>
        <Form.Control
          type="text"
          name="formRolesResponsibility"
          value={formData.formRolesResponsibility}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formResources">
        <Form.Label>Resources Required:</Form.Label>
        <Form.Control
          type="text"
          name="formResources"
          value={formData.formReqResources}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBudgetPaymentTerm">
        <Form.Label>Budget and Payment Terms</Form.Label>
        <Form.Control
          type="text"
          name="formBudgetPaymentTerm"
          value={formData.formBudgetPaymentTerm}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formTestingRequirements">
        <Form.Label>Standards and Testing Requirements</Form.Label>
        <Form.Control
          type="text"
          name="formTestingRequirements"
          value={formData.formTestingRequirements}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formAcceptanceCriteria">
        <Form.Label>Acceptance Criteria:</Form.Label>
        <Form.Control
          type="text"
          name="formAcceptanceCriteria"
          value={formData.formAcceptanceCriteria}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formCMT">
        <Form.Label>Change Management Process</Form.Label>
        <Form.Control
          type="text"
          name="formCMT"
          value={formData.formCMT}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formCompliance">
        <Form.Label> Legal and Regulatory Compliance</Form.Label>
        <Form.Control
          type="text"
          name="formCompliance"
          value={formData.formCompliance}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formSecurityReq">
        <Form.Label>Confidentiality and Security Requirements</Form.Label>
        <Form.Control
          type="text"
          name="formSecurityReq"
          value={formData.formSecurityReq}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formRiskManagement">
        <Form.Label>Risk Management</Form.Label>
        <Form.Control
          type="text"
          name="formRiskManagement"
          value={formData.formRiskManagement}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formTerminationClause">
        <Form.Label>Termination Clauses</Form.Label>
        <Form.Control
          type="text"
          name="formTerminationClause"
          value={formData.formTerminationClause}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formSignoff">
        <Form.Label>Sign-off Section</Form.Label>
        <Form.Control
          type="text"
          name="formSignoff"
          value={formData.formSignoff}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formContactInfo">
        <Form.Label>Contact Information</Form.Label>
        <Form.Control
          type="text"
          name="formContactInfo"
          value={formData.formContactInfo}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formAppendix">
        <Form.Label>Appendices or Additional Documents</Form.Label>
        <Form.Control
          type="text"
          name="formAppendix"
          value={formData.formAppendix}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Home;
