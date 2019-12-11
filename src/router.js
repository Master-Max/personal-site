import React from "react";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import BlogsPage from "./components/BlogsPage";
import ResumePage from "./components/ResumePage";

const routes = {
  "/": () => <HomePage />,
  "/about": () => <AboutPage />,
  "/projects": () => <ProjectsPage />,
  "/blogs": () => <BlogsPage />,
  "/resume": () => <ResumePage />
};

export default routes;
