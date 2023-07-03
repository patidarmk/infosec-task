import "./styles.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Profile from "./components/Pages/Profile/index";
import Settings from "./components/Pages/Settings/Settings";
import { createContext } from "react";
export const FormDataContext = createContext({});
const App = () => {
  const value = useState(
    localStorage.getItem("myData") !== undefined
      ? JSON.parse(localStorage.getItem("myData"))
      : {}
  );

  return (
    <FormDataContext.Provider value={value}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </FormDataContext.Provider>
  );
};

export default App;
