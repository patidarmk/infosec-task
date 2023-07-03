import React from "react";
import TabMenu from './TabMenu'
import { Container, Row, Col } from "react-bootstrap";
import logo_svg from "../../../assets/logo_info.svg";
const ProfilePage = ({ profileData, setCurrentPage }) => {
  const {
    basicDetails,
    educationDetails,
    experienceDetails,
    skillsDetails
  } = profileData;

  return (
    <>
    <Container className="user-profile-container">
      <div className="d-flex profile-user-info mb-4 ">
        <div className="d-flex profile-user-info-box gap-3">
          <div
            className=" d-flex mt-1 p-4 justify-content-center align-items-center"
            style={{
              width: "59px",
              height: "59px",
              backgroundColor: "#133D7A",
              borderRadius: "50%",
              color: "#fff"
            }}
          >
            MP
          </div>
          <div className="d-flex flex-column gap-1">
            <h5 style={{ padding: "0", margin: "0" }}>
              {basicDetails.fullName}
            </h5>
            <span
              className=" user-info-sub-title"
              style={{ color: "#00000080" }}
            >
              (Experience 2 year)
            </span>
            <span
              className="user-info-sub-title"
              style={{ color: "rgba(0, 0, 0, 0.87)" }}
            >
              City : {basicDetails.currentCity}
            </span>
            <span
              className="user-info-sub-title"
              style={{ color: "rgba(0, 0, 0, 0.87)" }}
            >
              Ux designer xyz Ltd.{" "}
            </span>
          </div>
        </div>
        <p
          className="btn-update-profile-bottom"
          onClick={() => setCurrentPage(1)}
        >
          Update
        </p>
      </div>

      <div
        className="profile-user-info-details"
        style={{ backgroundColor: "#e6f7ff80" }}
      >
        <Row className="mb-4">
          <div>
            <h5>Experience</h5>
            {experienceDetails.experience.map((experience, index) => (
              <div className="d-flex gap-3 mb-2">
                <img src={logo_svg} alt="cover" />
                <div key={index}>
                  <span className="user-profile-info-title-main">
                    {experience.designation}
                  </span>
                  <span className="user-info-sub-title">
                    {experience.organizationName}
                  </span>
                  <div className="d-flex">
                    <span className="user-info-sub-title">
                      {experience.joiningDate}
                    </span>
                    <span className="user-info-sub-title">
                      {experience.releasingDate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Row>

        <Row className="mb-4">
          <h5>Education</h5>
          {educationDetails.education.map((education, index) => (
            <div className="d-flex gap-3 mb-2">
              <img src={logo_svg} alt="cover" />
              <div key={index}>
                <span className="user-profile-info-title-main">
                  {education.university}
                </span>
                <span className="user-info-sub-title">
                  {education.degreeName}
                </span>
                <span className="user-info-sub-title">
                  {education.yearOfPassing}
                </span>
              </div>
            </div>
          ))}
        </Row>

        <Row className="mb-4">
          <Col>
            <h5>Skills</h5>
            {skillsDetails.skills.map((skill, index) => (
              <div className="d-flex gap-3 mb-2">
                <img src={logo_svg} alt="cover" />
                <div key={index}>
                  <span className="user-profile-info-title-main">
                    {skill.skillName}
                  </span>
                  <span className="user-info-sub-title">
                    {skill.experienceYears}
                  </span>
                  <span className="user-info-sub-title">{skill.details}</span>
                </div>
              </div>
            ))}
          </Col>
        </Row>
        <p
          className="btn-update-profile-bottom"
          onClick={() => setCurrentPage(1)}
          style={{width:"10rem",margin:"auto"}}
        >
          Update Profile
        </p>
      </div>
    </Container>
    <TabMenu />
    </>
  );
};

export default ProfilePage;
