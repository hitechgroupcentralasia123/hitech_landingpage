import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import ProjectPhoto1 from "../../../../Assets/Images/Photo.png";

const projects = [
  { name: "Chulakkurgan SPP (50 MW)", details: "Details for Chulakkurgan SPP...", image: "chulakkurgan.jpg" },
  { name: "Burnoye SPP (100 MW)", details: "Details for Burnoye SPP...", image: "burnoye.jpg" },
  { name: "Zadarya SPP (14 MW)", details: "Details for Zadarya SPP...", image: "zadarya.jpg" },
  { name: "Kuyonova SPP (7 MW)", details: "Details for Kuyonova SPP...", image: "kuyonova.jpg" },
  { name: "Gulshat SPP (40 MW)", details: "Location: Navoi region, Republic of Uzbekistan\nStatus: Commissioned in February 2019\nClient: Risen Energy (China)\nRole of Hi-Tech farm:\n- Development of project\n- General contractor for construction of DC and AC (110 kV) sides of SPP\n- General contractor for structure construction contractor\n- Commissioning of SPP\n- O&M for 5 years\n- Obtaining of custom duty exemptions\n- Tax advisory", image: "gulshat.jpg" },
  { name: "Navoi SPP (130 MW)", details: "Details for Navoi SPP...", image: "navoi.jpg" },
  // Add other projects here
];

function Projects() {
  const [openProjectIndex, setOpenProjectIndex] = useState(null);

  const handleProjectClick = (index) => {
    setOpenProjectIndex(index === openProjectIndex ? null : index);
  };

  const currentProject = openProjectIndex !== null ? projects[openProjectIndex] : null;

  return (
    <section className="projects">
      <div className="container">
        <div className="projects-inner">
          <div className="projects__content">
            <div className="projects__text">
              <h2>Projects</h2>
              <p>In everything we do, our goal is to minimize the risk for our customers, maximize project efficiency and profitability, and guarantee their long-term success.</p>
            </div>
            {currentProject && (
              <div className="project-display">
                <img src={ProjectPhoto1} alt={currentProject.name} className="project-image" />
                <div className="project-description">{currentProject.details}</div>
              </div>
            )}
            <div className="projects-list">
              {projects.map((project, index) => (
                <ProjectItem
                  key={index}
                  name={project.name}
                  details={project.details}
                  isOpen={index === openProjectIndex}
                  onClick={() => handleProjectClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
