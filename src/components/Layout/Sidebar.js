import React from "react";
import { Nav, Dropdown, Accordion } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import {
  BiHomeAlt,
  BiUser,
  BiCalendar,
  BiCog,
  BiLogOut,
  BiStar,
  BiBriefcase,
  BiCheckShield,
  BiX
} from "react-icons/bi";
import { useState } from "react";
import myjobs_icon from "../../assets/myjobs.svg";
import logout_svg from "../../assets/logout.svg";
import setting_svg from "../../assets/setting.svg";
import user_svg from "../../assets/user.svg";
import myapp_icon from "../../assets/myapplication.svg";
const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("My Profile"); // State to track active link

  const handleNavLinkClick = (linkName) => {
    setActiveLink(linkName);
    toggleSidebar();
  };
  return (
    <>
      <div className="sidebar shadow">
        <div className="profile-section">
          <div className="profile-picture d-flex flex-column align-items-center justify-content-center">
            <div
              className="rounded-circle d-flex  justify-content-center align-items-center"
              style={{
                width: "62px",
                backgroundColor: "#133D7A",
                color: "#fff",
                height: "62px"
              }}
            >
              MP
            </div>
            <h3 className="profile-name">John Doe</h3>
          </div>
        </div>

        <Nav.Link
          as={Link}
          to="/myjobs"
          className={`d-flex gap-2 mt-4 align-items-center ${
            activeLink === "My Jobs" ? "active-link" : ""
          }`}
          onClick={() => handleNavLinkClick("My Jobs")}
        >
          {" "}
          <img src={myjobs_icon} alt="my jobs" />
          <span className="link-main">My Jobs</span>
        </Nav.Link>
        <Nav className="flex-column">
          <Nav.Link href="#" className="d-flex align-items-center pl-1">
            <span className="sidebar-nav-link">Favroite Jobs</span>
          </Nav.Link>
          <Nav.Link href="#" className="d-flex align-items-center pl-1">
            <span className="sidebar-nav-link">Applied Jobs</span>
          </Nav.Link>
          <Nav.Link href="#" className="d-flex align-items-center pl-1">
            <span className="sidebar-nav-link">Closed Jobs</span>
          </Nav.Link>
        </Nav>

        <Nav.Link
          as={Link}
          to="/my-application"
          className={`d-flex gap-2 mt-4 align-items-center ${
            activeLink === "My Application" ? "active-link" : ""
          }`}
          onClick={() => handleNavLinkClick("My Application")}
        >
          {" "}
          <img src={myapp_icon} alt="" />
          <span className="link-main">My Application</span>
        </Nav.Link>
        <Nav className="flex-column">
          <Nav.Link href="#" className="d-flex align-items-center pl-1">
            <span className="sidebar-nav-link"> All</span>
          </Nav.Link>
          <Nav.Link href="#" className="d-flex align-items-center pl-1">
            <span className="sidebar-nav-link">Under Process</span>
          </Nav.Link>
          <Nav.Link href="#" className="d-flex align-items-center pl-1">
            <span className="sidebar-nav-link">Offers</span>
          </Nav.Link>
          <Nav.Link href="#" className="pl-1 d-flex align-items-center ">
            <span className="sidebar-nav-link">Closed</span>
          </Nav.Link>
        </Nav>

        <Nav.Link
          as={Link}
          to="/"
          className={`d-flex gap-2 mt-4 align-items-center ${
            activeLink === "My Profile" ? "active-link" : ""
          }`}
          onClick={() => handleNavLinkClick("My Profile")}
        >
          <img src={user_svg} alt="logout" />
          <span className="link-main">My Profile</span>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/settings"
          href="#"
          className={`d-flex gap-2 mt-4 align-items-center ${
            activeLink === "Settings" ? "active-link" : ""
          }`}
          onClick={() => handleNavLinkClick("Settings")}
        >
          <img src={setting_svg} alt="logout" />
          <span className="link-main">Settings</span>
        </Nav.Link>
        <Nav.Link
          className={`d-flex gap-2 mt-4 align-items-center ${
            activeLink === "Logout" ? "active-link" : ""
          }`}
          onClick={() => handleNavLinkClick("Logout")}
        >
          <img src={logout_svg} alt="logout" />
          <span className="link-main">Logout</span>
        </Nav.Link>
      </div>
      <div>
        {isSidebarOpen && (
          <div className="sidebar-small-screen">
            <div className="profile-section">
              <div className="profile-picture d-flex flex-column p-2">
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "40px",
                    backgroundColor: "#133D7A",
                    color: "#fff",
                    height: "40px"
                  }}
                >
                  MP
                </div>
                <h3 className="profile-name">John Doe</h3>
                <Nav.Link className="sidebar-small-link-update-profile mb-2">
                  Update Profile
                </Nav.Link>
              </div>
            </div>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="sidebar-nav-link-header">
                  <Nav.Link
                    as={Link}
                    to="/settings"
                    className={` ${
                      activeLink === "My Jobs" ? "active-link" : ""
                    }`}
                    onClick={() => handleNavLinkClick("My Jobs")}
                    style={{ display: "flex", gap: "1rem" }}
                  >
                    <img className="" src={myjobs_icon} alt="" />
                    <span className="link-main">My Jobs</span>
                  </Nav.Link>
                </Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "#f2f2f2" }}>
                  <Nav className="flex-column">
                    <Nav.Link
                      href="#"
                      className="d-flex align-items-center pl-1"
                    >
                      <span className="sidebar-nav-link">Favroite Jobs</span>
                    </Nav.Link>
                    <Nav.Link
                      href="#"
                      className="d-flex align-items-center pl-1"
                    >
                      <span className="sidebar-nav-link">Applied Jobs</span>
                    </Nav.Link>
                    <Nav.Link
                      href="#"
                      className="d-flex align-items-center pl-1"
                    >
                      <span className="sidebar-nav-link">Closed Jobs</span>
                    </Nav.Link>
                  </Nav>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="sidebar-nav-link-header">
                  <Nav.Link
                    as={Link}
                    to="/settings"
                    className={` ${
                      activeLink === "My Application" ? "active-link" : ""
                    }`}
                    onClick={() => handleNavLinkClick("My Application")}
                    style={{ display: "flex", gap: "1rem" }}
                  >
                    <img className="" src={myapp_icon} alt="" />
                    <span className="link-main">My Application</span>
                  </Nav.Link>
                </Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "#f2f2f2" }}>
                  <Nav className="flex-column">
                    <Nav.Link
                      href="#"
                      className="d-flex align-items-center pl-1"
                    >
                      <span className="sidebar-nav-link">All</span>
                    </Nav.Link>
                    <Nav.Link
                      href="#"
                      className="d-flex align-items-center pl-1"
                    >
                      <span className="sidebar-nav-link">Under Process</span>
                    </Nav.Link>
                    <Nav.Link
                      href="#"
                      className="d-flex align-items-center pl-1"
                    >
                      <span className="sidebar-nav-link">Offers</span>
                    </Nav.Link>
                    <Nav.Link
                      href="#"
                      className="d-flex align-items-center pl-1"
                    >
                      <span className="sidebar-nav-link">Closed</span>
                    </Nav.Link>
                  </Nav>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Nav.Link
              as={Link}
              to="/"
              className={`d-flex gap-3 mt-2 align-items-center ${
                activeLink === "My Profile" ? "active-link" : ""
              }`}
              onClick={() => handleNavLinkClick("My Profile")}
            >
              <img src={user_svg} alt="" />
              <span className="link-main">My Profile</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Settings"
              className={`d-flex gap-3 mt-4 align-items-center ${
                activeLink === "Settings" ? "active-link" : ""
              }`}
              onClick={() => handleNavLinkClick("Settings")}
            >
              <BiCog size={22} />
              <span className="link-main">Settings</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/"
              style={{position: "absolute", bottom: "1%"}}
              className={`d-flex gap-3 mt-4 align-items-center ${
                activeLink === "Logout" ? "active-link" : ""
              }`}
              onClick={() => handleNavLinkClick("Logout")}
            >
              <img src={logout_svg} alt="" />
              <span className="link-main">Logout</span>
            </Nav.Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
