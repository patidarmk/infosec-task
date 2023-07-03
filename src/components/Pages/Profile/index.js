import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import back from "../../../assets/back.svg";
import EducationDetailsPage from "./FormSteps/EducationalDetails";
import ExperienceDetailsPage from "./FormSteps/ProfessionalDetails";
import SkillsDetailsPage from "./FormSteps/SkillsDetails";
import AdditionalDetailsPage from "./FormSteps/AdditionalDetails";
import ContactDetailsPage from "./FormSteps/ContactDetails";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FormDataContext } from "../../../App";
import BasicDetailsPage from "./FormSteps/BasicDetails";
import ProfilePage from "./ShowUserProfile";

const MultiStepForm = () => {
  const navigate = useNavigate();
  const dataLocal = useContext(FormDataContext);
  const [state, setState] = dataLocal;
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    basicDetails: {
      title: "",
      fullName: "Mukesh Patidar",
      dob: "",
      currentCity: "Udaipur",
      referalId: "",
      profilePicture: "",
      resume: ""
    },
    educationDetails: {
      education: [
        {
          degreeName: "Bechlor of Technology(CS)",
          yearOfPassing: "2016 - 2022",
          university: "Poornima University Jaipur"
        },
        {
          degreeName: "XII",
          yearOfPassing: "2015",
          university: "Board Of Secondary Education Rajasthan"
        },
        {
          degreeName: "X",
          yearOfPassing: "2013",
          university: "Board Of Secondary Education Rajasthan"
        }
      ]
    },
    experienceDetails: {
      experience: [
        {
          type: "experience",
          organizationName: "Wipro",
          designation: "React Developer",
          responsibility: "",
          joiningDate: "Apr 21",
          releasingDate: "Apr 23"
        }
      ]
    },
    skillsDetails: {
      skills: [
        {
          skillName: "React js",
          experienceYears: "2",
          details: "N/A"
        }
      ]
    },

    additionalDetails: {
      relocation: "yes",
      remoteWork: "yes",
      bringYourOwnDevice: "yes",
      ctc: "",
      ectc: "",
      openToShift: "yes",
      hasPassport: "yes",
      passportValidity: ""
    },
    contactDetails: {
      currentCity: "Udaipur",
      contactNo: "",
      phone: "",
      alternateNo: ""
    }
  });

  useEffect(() => {
    if (state && Object.keys(state).length !== 0) {
      setFormData(state);
    }
  }, []);

  const handleFormChange = (page, field, value) => {
    console.log(formData);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [page]: {
        ...prevFormData[page],
        [field]: value
      }
    }));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSubmitForm = () => {
    // Handle form submission
    console.log(formData);
    setState({ ...state, formData });
    localStorage.setItem("myData", JSON.stringify(formData));
    setCurrentPage(0);
    // navigate('/');
    // handleNextPage();
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <BasicDetailsPage
            data={formData.basicDetails}
            onChange={handleFormChange}
          />
        );
      case 2:
        return (
          <EducationDetailsPage
            data={formData.educationDetails}
            onChange={handleFormChange}
          />
        );
      case 3:
        return (
          <ExperienceDetailsPage
            data={formData.experienceDetails}
            onChange={handleFormChange}
          />
        );
      case 4:
        return (
          <SkillsDetailsPage
            data={formData.skillsDetails}
            onChange={handleFormChange}
          />
        );
      case 5:
        return (
          <AdditionalDetailsPage
            data={formData.additionalDetails}
            onChange={handleFormChange}
          />
        );
      case 6:
        return (
          <ContactDetailsPage
            data={formData.contactDetails}
            onChange={handleFormChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Link
        to="/"
        onClick={() => setCurrentPage(0)}
        className="back-link back-btn px-3 my-2"
      >
        <img src={back} alt="" />
      </Link>
      {currentPage === 0 ? (
        <ProfilePage profileData={formData} setCurrentPage={setCurrentPage} />
      ) : (
        <div className="container " style={{ margin: 0, padding: 0 }}>
          <Nav variant="tabs" activeKey={currentPage.toString()} className="">
            <Nav.Item className="form-tab">
              <Nav.Link eventKey="1" onClick={() => setCurrentPage(1)}>
                General Details
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="form-tab">
              <Nav.Link eventKey="2" onClick={() => setCurrentPage(2)}>
                Education Details
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="form-tab">
              <Nav.Link eventKey="3" onClick={() => setCurrentPage(3)}>
                Experience Details
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="form-tab">
              <Nav.Link eventKey="4" onClick={() => setCurrentPage(4)}>
                Skills and Expertise
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="form-tab">
              <Nav.Link eventKey="5" onClick={() => setCurrentPage(5)}>
                Additional Details
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="form-tab">
              <Nav.Link eventKey="6" onClick={() => setCurrentPage(6)}>
                Contact Details
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <hr className="hr-tag" />

          <div className="form-container mt-4" style={{ height: "75vh" }}>
            {renderPage()}

            <div className="d-flex justify-content-between mt-4 botton-container ">
              {currentPage === 1 && (
                <button
                  className="btn btn btn-light btn-pre-next"
                  onClick={() => setCurrentPage(0)}
                >
                  Cancel
                </button>
              )}

              {currentPage > 1 && (
                <button
                  className="btn btn btn-light btn-pre-next"
                  onClick={handlePreviousPage}
                >
                  Previous
                </button>
              )}

              <button
                className="btn btn-primary "
                onClick={handleSubmitForm}
                style={{ backgroundColor: "#133D7A", width: "8rem" }}
              >
                Save Changes
              </button>

              {currentPage < 6 && (
                <button
                  className="btn btn btn-light btn-pre-next"
                  onClick={handleNextPage}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MultiStepForm;
