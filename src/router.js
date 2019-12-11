import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

const routes = {
  "/": () => <HomePage />,
  "/about": () => <AboutPage />
};

export default routes;
