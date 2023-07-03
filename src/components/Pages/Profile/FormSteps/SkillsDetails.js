import React, { useState } from "react";
import { Form, Button, Nav, Table, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
const SkillsPage = ({ data, onChange }) => {
  const [newSkill, setNewSkill] = useState({
    skillName: "",
    experienceYears: "",
    details: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSkill((prevSkill) => ({
      ...prevSkill,
      [name]: value
    }));
  };

  const handleAddSkill = () => {
    onChange("skillsDetails", "skills", [...data.skills, newSkill]);
    setNewSkill({
      skillName: "",
      experienceYears: "",
      details: ""
    });
  };

  return (
    <div>
      <Row className="mb-3">
        <Form.Group controlId="skillName" style={{ width: "50%" }}>
          <Form.Label>Name of Skills/Technology:</Form.Label>
          <Form.Control
            type="text"
            name="skillName"
            value={newSkill.skillName}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="experienceYears" style={{ width: "50%" }}>
          <Form.Label>Years of Experience:</Form.Label>
          <Form.Control
            type="text"
            name="experienceYears"
            value={newSkill.experienceYears}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group controlId="details">
          <Form.Label>Details:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="details"
            value={newSkill.details}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>

      <Nav.Link
        onClick={handleAddSkill}
        className="d-flex align-items-center gap-1 mt-2"
        style={{ color: "blue" }}
      >
        <FaPlus size={13} className="add-new-icon" />
        Add Skill
      </Nav.Link>

      {data.skills.length > 0 && (
        <Table className="mt-4">
          <thead>
            <tr>
              <th>Skill/Technology Name</th>
              <th>Years of Experience</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.skills.map((skill, index) => (
              <tr key={index}>
                <td>{skill.skillName}</td>
                <td>{skill.experienceYears}</td>
                <td>{skill.details}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default SkillsPage;
