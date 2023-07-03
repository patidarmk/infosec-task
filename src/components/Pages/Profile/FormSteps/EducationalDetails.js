import React, { useState } from "react";
import { Table, Button, Row, Form, Nav } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
const EducationDetailsPage = ({ data, onChange }) => {
  const [newDegree, setNewDegree] = useState({
    degreeName: "",
    yearOfPassing: "",
    university: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDegree((prevDegree) => ({
      ...prevDegree,
      [name]: value
    }));
  };

  const handleAddDegree = () => {
    onChange("educationDetails", "education", [...data.education, newDegree]);
    setNewDegree({
      degreeName: "",
      yearOfPassing: "",
      university: ""
    });
  };

  return (
    <div>
      <Row className="mb-3">
        <Form.Group controlId="degreeName">
          <Form.Label>Degree Name:</Form.Label>
          <Form.Control
            type="text"
            name="degreeName"
            value={newDegree.degreeName}
            onChange={handleInputChange}
            style={{ width: "70%" }}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group controlId="yearOfPassing">
          <Form.Label>Year of Passing:</Form.Label>
          <Form.Control
            type="text"
            name="yearOfPassing"
            value={newDegree.yearOfPassing}
            onChange={handleInputChange}
            style={{ width: "70%" }}
          />
        </Form.Group>
      </Row>

      <Form.Group controlId="university">
        <Form.Label>University:</Form.Label>
        <Form.Control
          type="text"
          name="university"
          value={newDegree.university}
          onChange={handleInputChange}
          style={{ width: "70%" }}
        />
      </Form.Group>

      <Nav.Link
        onClick={handleAddDegree}
        className="d-flex align-items-center gap-1 mt-2"
        style={{ color: "blue" }}
      >
        <FaPlus size={13} className="add-new-icon" />
        Add New
      </Nav.Link>

      {data.education.length > 0 && (
        <Table className="mt-4">
          <thead>
            <tr>
              <th>Degree Name</th>
              <th>Year of Passing</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            {data.education.map((degree, index) => (
              <tr key={index}>
                <td>{degree.degreeName}</td>
                <td>{degree.yearOfPassing}</td>
                <td>{degree.university}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default EducationDetailsPage;
