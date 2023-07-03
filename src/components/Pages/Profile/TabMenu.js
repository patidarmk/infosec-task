import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import {
  FaHome,
  FaPlus,
  FaClipboardList,
  FaBriefcase,
  FaUser
} from "react-icons/fa";

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("home");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      className="d-md-none fixed-bottom"
      style={{ background: "#133D7A", fontSize: "12px" }}
    >
      <Nav justified className="p-2">
        <NavItem>
          <NavLink
            className={`text-center ${activeTab === "home" ? "active" : ""}`}
            onClick={() => toggleTab("home")}
            style={{ color: "white" }}
          >
            <FaHome />
            <div>Home</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`text-center ${activeTab === "job" ? "active" : ""}`}
            onClick={() => toggleTab("job")}
            style={{ color: "white" }}
          >
            <FaBriefcase />
            <div>Job</div>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            style={{ position: "absolute", right: "0%", bottom: "25%" }}
            className={`text-center ${
              activeTab === "application" ? "active" : ""
            }`}
            onClick={() => toggleTab("application")}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "3rem",
                height: "3rem",
                backgroundColor: "yellow",
                margin: "auto",
                backgroundColor: "yellow",
                borderRadius: "50%"
              }}
            >
              <FaPlus />
            </div>
            <div style={{ color: "white" }}>Add </div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`text-center ${
              activeTab === "application" ? "active" : ""
            }`}
            onClick={() => toggleTab("application")}
            style={{ color: "white" }}
          >
            <FaClipboardList />
            <div>Application</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`text-center ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => toggleTab("profile")}
            style={{ color: "white" }}
          >
            <FaUser />
            <div>Profile</div>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default TabMenu;
