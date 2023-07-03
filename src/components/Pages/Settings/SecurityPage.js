import React, { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";

const SecurityPage = ({ data, onChange }) => {
  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [updatePassword, setUpdatePassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPassword((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdatePassword = () => {
    console.log(data);
    if (
      password.oldPassword == data.password &&
      password.newPassword === password.confirmPassword
    ) {
      console.log(password);
      // Password change logic here
      console.log("changed");
      onChange("settings", "password", password.newPassword); // Call the onChange function to update the password in the parent component
      setUpdatePassword(false); // Reset the updatePassword state
    } else {
      setPasswordError(true);
    }
  };

  return (
    <div>
      {updatePassword ? (
        <Form>
          <div className="">
            <Row className="mb-3">
              <Form.Group className="form-group" controlId="oldPassword">
                <Form.Label style={{ width: "50%" }}>Old Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="oldPassword"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="form-group" controlId="newPassword">
                <Form.Label style={{ width: "50%" }}>New Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="newPassword"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3 ">
              <Form.Group className="form-group" controlId="confirmPassword">
                <Form.Label style={{ width: "50%" }}>
                  Confirm New Password:
                </Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>
            {passwordError && (
              <p className="text-danger">
                Either old password is not corrrect or new and confirm password
                not match.
              </p>
            )}
            <Button variant="primary" onClick={handleUpdatePassword}>
              Update Password
            </Button>
          </div>
        </Form>
      ) : (
        <div>
          <Row className="mb-3">
            <Form.Group className="form-group" controlId="oldPassword">
              <Form.Label style={{ width: "50%" }}>Old Password:</Form.Label>
              <span onClick={() => setUpdatePassword(true)}>Update</span>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group className="form-group" controlId="oldPassword">
              <Form.Label style={{ width: "50%" }}>
                2-Step Verification :
              </Form.Label>
              <span>Set up</span>
            </Form.Group>
          </Row>
        </div>
      )}
    </div>
  );
};

export default SecurityPage;
