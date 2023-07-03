import React, { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";

const PrivacyPage = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange("privacy", name, value);
  };

  return (
    <div className="px-1">
      <Row className="mb-4">
        <Form.Group controlId="profilePublic">
          <Form.Label className="custom-form-label">
            Make Profile Public :
          </Form.Label>
          <Form.Check
            inline
            type="radio"
            name="profilePublic"
            id="profilePublicYes"
            label="Yes"
            value="yes"
            checked={data.profilePublic === "yes"}
            onChange={handleInputChange}
          />
          <Form.Check
            inline
            type="radio"
            name="profilePublic"
            id="profilePublicNo"
            label="No"
            value="no"
            checked={data.profilePublic === "no"}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      <Row className="my-4">
        <Form.Group controlId="profilePrivate">
          <Form.Label className="custom-form-label">
            Make Profile Private :
          </Form.Label>

          <Form.Check
            inline
            type="radio"
            name="profilePrivate"
            id="profilePrivateYes"
            label="Yes"
            value="yes"
            checked={data.profilePrivate === "yes"}
            onChange={handleInputChange}
          />
          <Form.Check
            inline
            type="radio"
            name="profilePrivate"
            id="profilePrivateNo"
            label="No"
            value="no"
            checked={data.profilePrivate === "no"}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      <Row className="my-4">
        <Form.Group controlId="profileAnonymous">
          <Form.Label className="custom-form-label">
          Make Profile Anonymous :
          </Form.Label>
          <Form.Check
            inline
            type="radio"
            name="profileAnonymous"
            id="profileAnonymousYes"
            label="Yes"
            value="yes"
            checked={data.profileAnonymous === "yes"}
            onChange={handleInputChange}
          />
          <Form.Check
            inline
            type="radio"
            name="profileAnonymous"
            id="profileAnonymousNo"
            label="No"
            value="no"
            checked={data.profileAnonymous === "no"}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      <Row className="my-4">
        <Form.Group controlId="JobSearchAlert">
          <Form.Label className="custom-form-label">Job search alert :</Form.Label>
          <Form.Check
            inline
            type="radio"
            name="JobSearchAlert"
            id="JobSearchAlertYes"
            label="On"
            value="on"
            checked={data.JobSearchAlert === "on"}
            onChange={handleInputChange}
          />
          <Form.Check
            inline
            type="radio"
            name="JobSearchAlert"
            id="JobSearchAlertNo"
            label="Off"
            value="off"
            checked={data.JobSearchAlert === "off"}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>

      <Row className="my-4">
        <Form.Group controlId="desktopNotification">
          <Form.Label className="custom-form-label">
            Desktop Notification :
          </Form.Label>
          <Form.Check
            inline
            type="radio"
            name="desktopNotification"
            id="desktopNotificationYes"
            label="On"
            value="on"
            checked={data.desktopNotification === "on"}
            onChange={handleInputChange}
          />
          <Form.Check
            inline
            type="radio"
            name="desktopNotification"
            id="desktopNotificationNo"
            label="Off"
            value="off"
            checked={data.desktopNotification === "off"}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      
      <Row className="my-4 ">
        <Form.Group controlId="emailNotification">
          <Form.Label className="custom-form-label">
            Email Notification :
          </Form.Label>
          <Form.Check
            inline
            type="radio"
            name="emailNotification"
            id="emailNotificationYes"
            label="On"
            value="on"
            checked={data.emailNotification === "on"}
            onChange={handleInputChange}
          />
          <Form.Check
            inline
            type="radio"
            name="emailNotification"
            id="emailNotificationNo"
            label="Off"
            value="off"
            checked={data.emailNotification === "off"}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>
  
    </div>
  );
};

export default PrivacyPage;
