import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container
} from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import {
  BiUser,
  BiBell,
  BiPencil,
  BiLock,
  BiShield,
  BiLogOut
} from "react-icons/bi";

import dropdown_svg from "../../assets/dropdown.svg";
import logo from "../../assets/logo.svg";
import resume from "../../assets/resume.svg";
import search_job from "../../assets/search.svg";

const NavbarComponent = ({ toggleSidebar }) => {
  return (
    <>
      {/* Large Screen Navbar */}
      <div className="large-screen-navbar mb-2">
        <Navbar bg="light" className="p-2 px-5 d-flex justify-content-between">
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" className="logo" />
            <span className="navbar-logo-tagline">Securing Digital World</span>
          </Navbar.Brand>
          <Nav className="ml-auto d-flex justify-content-end align-items-center">
            <Nav.Link>
              <div className="d-flex gap-1 flex-column justify-content-center align-items-center">
                <img src={search_job} alt="Logo" className="icon" />
                <span className="link-text">Search Job</span>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="d-flex gap-1 flex-column justify-content-center align-items-center">
                <img src={resume} alt="Logo" className="icon" />
                <span className="link-text">My Application</span>
              </div>
            </Nav.Link>
            <Nav.Link href="#" id="navbar-link-profile">
              <div className="d-flex flex-column justify-content-center align-items-center">
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

                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    id="custom-dropdown-toggle"
                    className="custom-dropdown-toggle"
                    style={{ border: "none !important", padding: 0 }}
                  >
                    <span className="link-text">My Profile</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="custom-dropdown-menu dropdown-menu-end">
                    <Dropdown.Item href="#">
                      <BiUser size={18} />
                      <span className="item-text">View Profile</span>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <BiPencil size={18} />
                      <span className="item-text">Update Profile</span>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <BiLock size={18} />
                      <span className="item-text">Privacy Settings</span>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <BiShield size={18} />
                      <span className="item-text">Security Settings</span>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <BiLogOut size={18} />
                      <span className="item-text">Logout</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      {/* Small Screen Navbar */}
      <div className="small-screen-navbar">
        <Navbar
          bg="light"
          className="d-flex p-2 justify-content-between"
          style={{ width: "100%" }}
        >
          <Navbar.Brand href="#">
            <span
              className="navbar-toggler-icon"
              onClick={toggleSidebar}
            ></span>
          </Navbar.Brand>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <div className="notification-bell m-2">
            <BiBell size={24} />
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarComponent;
