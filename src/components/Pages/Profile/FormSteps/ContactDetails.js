import React, { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";

const ContactDetailsPage = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange("contactDetails", name, value);
  };

  return (
    <Form>
      <div className="">
        <Row className="mb-3">
          <Form.Group controlId="currentCity">
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
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={data.email}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="contactNo">
            <Form.Label>Contact No:</Form.Label>
            <Form.Control
              type="text"
              name="contactNo"
              value={data.contactNo}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="alternateNo">
            <Form.Label>Alternate No:</Form.Label>
            <Form.Control
              type="text"
              name="alternateNo"
              value={data.alternateNo}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>
      </div>
    </Form>
  );
};

export default ContactDetailsPage;
