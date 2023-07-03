import React from "react";
import { useState } from "react";
import SecurityPage from "./SecurityPage";
import PrivacyPage from "./PrivacyPage";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Settings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const [userSettings, setUserSettings] = useState(
    localStorage.getItem("userSettings") !== null
      ? JSON.parse(localStorage.getItem("userSettings"))
      : {
          privacy: {
            profilePublic: "no",
            profilePrivate: "yes",
            profileAnonymous: "no",
            JobSearchAlert: "on",
            desktopNotification: "on",
            emailNotification: "on"
          },
          settings: {
            password: "12345678",
            twoStepVerification: ""
          }
        }
  );

  console.log(userSettings);

  const handleFormChange = (page, field, value) => {
    console.log(userSettings);
    setUserSettings((prevFormData) => ({
      ...prevFormData,
      [page]: {
        ...prevFormData[page],
        [field]: value
      }
    }));
  };

  const handleSubmitForm = () => {
    //Handle form submission
    console.log(userSettings);
    localStorage.setItem("userSettings", JSON.stringify(userSettings));
    setCurrentPage(0);
    navigate("/");
  };
  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <PrivacyPage
            data={userSettings.privacy}
            onChange={handleFormChange}
          />
        );
      case 2:
        return (
          <SecurityPage
            data={userSettings.settings}
            onChange={handleFormChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="settings-container">
      <div className="container" style={{ margin: 0, padding: 0 }}>
        <Nav variant="tabs" activeKey={currentPage.toString()} className="">
          <Nav.Item className="form-tab">
            <Nav.Link eventKey="1" onClick={() => setCurrentPage(1)}>
              Privacy
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="form-tab">
            <Nav.Link eventKey="2" onClick={() => setCurrentPage(2)}>
              Security
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <hr className="hr-tag" />

        <div
          className="form-container mt-4"
          style={{ overflowY: "scroll", height: "75vh", overflowX: "hidden" }}
        >
          {renderPage()}

          <div className="d-flex justify-content-between mt-4 botton-container ">
            <button
              className="btn btn btn-light btn-pre-next"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary "
              onClick={handleSubmitForm}
              style={{ backgroundColor: "#133D7A", width: "8rem" }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
