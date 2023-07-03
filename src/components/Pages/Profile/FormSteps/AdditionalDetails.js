import React, { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";

const AdditionalDetailsPage = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange("additionalDetails", name, value);
  };

  return (
    <div className="px-5">
      <Row className="mb-3">
        <Form.Group controlId="relocation">
          <Form.Label className="custom-form-label">
            Open to Relocation :
          </Form.Label>
          <Form.Check
            inline
            type="radio"
            name="relocation"
            id="relocationYes"
            label="Yes"
            value="yes"
            checked={data.relocation === "yes"}
            onChange={handleInputChange}
          />
          <Form.Check
            inline
            type="radio"
            name="relocation"
            id="relocationNo"
            label="No"
            value="no"
            checked={data.relocation === "no"}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="remoteWork">
          <Form.Label className="custom-form-label">
            Open to Remote Work :
          </Form.Label>

          <Form.Check
            inline
            type="radio"
            name="remoteWork"
            id="remoteWorkYes"
            label="Yes"
            value="yes"
            checked={data.remoteWork === "yes"}
            onChange={handleInputChange}
          />
          <Form.Check
            inline
            type="radio"
            name="remoteWork"
            id="remoteWorkNo"
            label="No"
            value="no"
            checked={data.remoteWork === "no"}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="bringYourOwnDevice">
          <Form.Label className="custom-form-label">
            Open to Bring Your Own Device :
          </Form.Label>
          <Form.Check
            inline
            type="radio"
            name="bringYourOwnDevice"
            id="bringYourOwnDeviceYes"
            label="Yes"
            value="yes"
            checked={data.bringYourOwnDevice === "yes"}
            onChange={handleInputChange}
          />
          <Form.Check
            inline
            type="radio"
            name="bringYourOwnDevice"
            id="bringYourOwnDeviceNo"
            label="No"
            value="no"
            checked={data.bringYourOwnDevice === "no"}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="ctc" style={{ width: "50%" }}>
          <Form.Label>CCTC :</Form.Label>
          <Form.Control
            type="text"
            name="ctc"
            value={data.ctc}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="etc" style={{ width: "50%" }}>
          <Form.Label>ECTC :</Form.Label>
          <Form.Control
            type="text"
            name="ectc"
            value={data.ectc}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group controlId="openToShift">
          <Form.Label className="custom-form-label">Open to Shift :</Form.Label>
          <Form.Check
            inline
            type="radio"
            name="openToShift"
            id="openToShiftYes"
            label="Yes"
            value="yes"
            checked={data.openToShift === "yes"}
            onChange={handleInputChange}
          />
          <Form.Check
            inline
            type="radio"
            name="openToShift"
            id="openToShiftNo"
            label="No"
            value="no"
            checked={data.openToShift === "no"}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group controlId="hasPassport">
          <Form.Label className="custom-form-label">
            Do you have a Passport :
          </Form.Label>
          <Form.Check
            inline
            type="radio"
            name="hasPassport"
            id="hasPassportYes"
            label="Yes"
            value="yes"
            checked={data.hasPassport === "yes"}
            onChange={handleInputChange}
          />
          <Form.Check
            inline
            type="radio"
            name="hasPassport"
            id="hasPassportNo"
            label="No"
            value="no"
            checked={data.hasPassport === "no"}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      {data.hasPassport === "yes" && (
        <Form.Group controlId="passportValidity">
          <Form.Label>Passport Validity:</Form.Label>
          <Form.Control
            type="text"
            name="passportValidity"
            value={data.passportValidity}
            onChange={handleInputChange}
          />
        </Form.Group>
      )}
    </div>
  );
};

export default AdditionalDetailsPage;
