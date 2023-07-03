import React, { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";

const BasicDetailsPage = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange("basicDetails", name, value);
  };

  return (
    <div>
      <Row className="mb-3">
        <Form.Group controlId="title" style={{ width: "30%" }}>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            as="select"
            name="title"
            value={data.title}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="fullName" style={{ width: "70%" }}>
          <Form.Label>Full Name:</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={data.fullName}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="dateOfBirth" style={{ width: "50%" }}>
          <Form.Label>Date of Birth:</Form.Label>
          <Form.Control
            type="date"
            name="dateOfBirth"
            value={data.dateOfBirth}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="currentCity" style={{ width: "50%" }}>
          <Form.Label>Current City:</Form.Label>
          <Form.Control
            type="text"
            name="currentCity"
            value={data.currentCity}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="referralId">
          <Form.Label>Referral ID:</Form.Label>
          <Form.Control
            type="text"
            name="referralId"
            value={data.referralId}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>

      <Form.Group controlId="profilePicture">
        <Form.Label>Upload Profile Picture:</Form.Label>
        <Form.Control
          type="file"
          name="profilePicture"
          accept="image/*"
          onChange={handleInputChange}
          style={{ height: "2.4rem" }}
        />
      </Form.Group>
      <span className="mb-3">{data.profilePicture}</span>

      <Form.Group controlId="resume" className="mt-3">
        <Form.Label>Upload Resume:</Form.Label>
        <Form.Control
          type="file"
          name="resume"
          accept=".pdf"
          onChange={handleInputChange}
          style={{ height: "2.4rem" }}
        />
      </Form.Group>
      <span>{data.resume}</span>
    </div>
  );
};

export default BasicDetailsPage;
