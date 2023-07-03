import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <div
        className="container"
        style={{ margin: "0.5", padding: "0",position:"relative" }}
      >
        <div className="row">
          <div className="col-md-3 " style={{ padding: ".1rem" }}>
            <Sidebar
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          </div>
          <div className="col-md-6 px-1" style={{ padding: 0 }}>
            {children}
          </div>
          <div
            className="col-md-3 shadow container-right"
            style={{ backgroundColor: "#f2f2f2",height:"600px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
