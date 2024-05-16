import React from "react";
import ProjectItem from "./ProjectsItem";

const projects = [
  { name: "Chilik 1 SPP (20 MW)", details: "..." },
  { name: "Burabay SPP (50 MW)", details: "..." },
  // добавьте остальные проекты
];

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <div className="projects_inner">
          <div className="projects__content"></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
