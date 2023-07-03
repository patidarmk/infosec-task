import React, { useState } from "react";
import { Form, Table, Row, Nav } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
const ProfessionalDetailsPage = ({ data, onChange }) => {
  const [newExperience, setNewExperience] = useState({
    type: "experience",
    organizationName: "",
    designation: "",
    responsibility: "",
    joiningDate: "",
    releasingDate: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value
    }));
  };

  const handleAddExperience = () => {
    onChange("experienceDetails", "experience", [
      ...data.experience,
      newExperience
    ]);
    setNewExperience({
      type: "experience",
      organizationName: "",
      designation: "",
      responsibility: "",
      joiningDate: "",
      releasingDate: ""
    });
  };

  return (
    <div>
      <Row className="mb-3">
        <Form.Group controlId="type">
          <Form.Label></Form.Label>
          <Form.Check
            inline
            type="radio"
            name="type"
            id="radioExperience"
            label="Experience"
            value="experience"
            checked={newExperience.type === "experience"}
            onChange={handleInputChange}
          />
          <Form.Check
            inline
            type="radio"
            name="type"
            id="radioFresher"
            label="Fresher"
            value="fresher"
            checked={newExperience.type === "fresher"}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>

      {newExperience.type === "experience" && (
        <>
          <Row className="mb-3">
            <Form.Group controlId="organizationName" style={{ width: "50%" }}>
              <Form.Label>Organization Name:</Form.Label>
              <Form.Control
                type="text"
                name="organizationName"
                value={newExperience.organizationName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="designation" style={{ width: "50%" }}>
              <Form.Label>Designation:</Form.Label>
              <Form.Control
                type="text"
                name="designation"
                value={newExperience.designation}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="responsibility">
              <Form.Label>Responsibility:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="responsibility"
                value={newExperience.responsibility}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group controlId="joiningDate" style={{ width: "50%" }}>
              <Form.Label>Joining Date:</Form.Label>
              <Form.Control
                type="date"
                name="joiningDate"
                value={newExperience.joiningDate}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="releasingDate" style={{ width: "50%" }}>
              <Form.Label>Releasing Date:</Form.Label>
              <Form.Control
                type="date"
                name="releasingDate"
                value={newExperience.releasingDate}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
          <Nav.Link
            onClick={handleAddExperience}
            className="d-flex align-items-center gap-1 mt-2"
            style={{ color: "blue" }}
          >
            <FaPlus size={13} className="add-new-icon" />
            Add Experience
          </Nav.Link>
        </>
      )}

      {data.experience.length > 0 && (
        <Table className="mt-4">
          <thead>
            <tr>
              <th>Type</th>
              <th>Organization Name</th>
              <th>Designation</th>
              <th>Responsibility</th>
              <th>Joining Date</th>
              <th>Releasing Date</th>
            </tr>
          </thead>
          <tbody>
            {data.experience.map((experience, index) => (
              <tr key={index}>
                <td>{experience.type}</td>
                <td>{experience.organizationName}</td>
                <td>{experience.designation}</td>
                <td>{experience.responsibility}</td>
                <td>{experience.joiningDate}</td>
                <td>{experience.releasingDate}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ProfessionalDetailsPage;
