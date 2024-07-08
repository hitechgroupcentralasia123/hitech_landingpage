import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import Photo1 from "../../../../Assets/Images/projectPhoto/Photo.webp";
import Photo2 from "../../../../Assets/Images/projectPhoto/Photo1.webp";
import Photo3 from "../../../../Assets/Images/projectPhoto/Photo2.webp";
import Photo4 from "../../../../Assets/Images/projectPhoto/Photo3.webp";
import Photo5 from "../../../../Assets/Images/projectPhoto/Photo4.webp";
import Photo6 from "../../../../Assets/Images/projectPhoto/Photo5.webp";
import Photo7 from "../../../../Assets/Images/projectPhoto/Photo6.webp";
import Photo8 from "../../../../Assets/Images/projectPhoto/photo8.webp";

const projects = [
  {
    name: "SAMARKAND SPP (250 MW)",
    details:
      "Location: Samarkand region, Republic of Uzbekistan;\nStatus: Commissioned in 2024;\nClient: Masdar (UAE)\nEPC: DEC (China)\n\nRole of Hi-Tech team:\nContractor for the construction of DC and AC sides;\nContractor for the construction of solar power plants\nTesting and project consulting",
    image: Photo6,
  },
  {
    name: "Gulshat SPP (40 MW)",
    details:
      "Location: Turkestan region, Republic of Kazakhstan; \nStatus: Commissioned in 2023; \nClient: ENI (Italy). \nEPC: SemArko (Kazakhstan) \n\nRole of Hi-Tech team: \nContractor for the construction of MW DC and AC sides; \nContractor for the construction of solar power plants \nTesting and project consulting",
    image: Photo1,
  },
  {
    name: "SHAULDER SPP (50 MW)",
    details:
      "Location: Turkestan region, Republic of Kazakhstan;\nStatus: Commissioned in 2023;\nClient: ENI (Italy).\nEPC: SemArko (Kazakhstan)\n\nRole of Hi-Tech team:\nContractor for the construction of MW DC and AC sides;\nContractor for the construction of solar power plants\nTesting and project consulting",
    image: Photo7,
  },
  {
    name: "Navoi SPP (130 MW)",
    details:
      "Location: Navoi region, Republic of Uzbekistan; \nStatus: Commissioned in 2021; \nClient: Masdar (UAE). \nEPC: SEPCO 3 \n\nRole of Hi-Tech team: \nContractor for the construction of DC and AC sides; \nContractor for the construction of solar power plants \nTesting and project consulting",
    image: Photo3,
  },
  {
    name: "Burnoye SPP (100 MW)",
    details:
      "Location: B. Momyshuly village, Zhambyl region, Kazakhstan; \nStatus: Commissioned in 2019; \nClient: United Green (UK). \nEPC: Metka \n\nRole of Hi-Tech team: \nСonstruction sub contractor (AC and DC) \nStructure construction sub contractor",
    image: Photo2,
  },
  {
    name: "Zadarya SPP (14 MW)",
    details:
      "Location: Arys village, Turkestan region, Kazakhstan; \nStatus: Commissioned in November 2019; \nClient: Urbasolar SAS (France). \n\nRole of Hi-Tech team: \nСonstruction sub contractor (AC and DC) \nStructure construction sub contractor",
    image: Photo8,
  },
  {
    name: "Kuyonova SPP (7 MW)",
    details:
      "Location: Kuyanovka village, Sumy region, Ukraine; \nStatus: Commissioned in 2019; \nClient: Georgian Industrial Group (Georgia). \n\nRole of Hi-Tech team: \nMain contractor for construction of DC side; \nCommissioning of project (DC). \nGeneral contractor for structure construction contractor",
    image: Photo4,
  },
  {
    name: "Chulakkurgan SPP (50 MW)",
    details:
      "Location: Chulakkurgan village, Turkestan region, Kazakhstan; \nStatus: Commissioned in December 2019; \nClient: Risen Energy (China). \n\nRole of Hi-Tech team: \nGeneral contractor for construction of DC and AC sides; \nGeneral contractor for structure construction contractor \nCommisioning of SPP.",
    image: Photo5,
  },
];


function Projects() {
  const [openProjectIndex, setOpenProjectIndex] = useState(null);

  const handleProjectClick = (index) => {
    setOpenProjectIndex(index === openProjectIndex ? null : index);
  };

  const currentProject =
    openProjectIndex !== null ? projects[openProjectIndex] : projects[0];

  return (
    <section className="projects">
      <div className="container">
        <div className="projects-inner">
          <div className="projects__content">
            <div className="projects__text">
              <h2>Projects</h2>
              <p>
                In everything we do, our goal is to minimize the risk for our
                customers, maximize project efficiency and profitability, and
                guarantee their long-term success.
              </p>
            </div>
            <div className="project-display">
              <img
                src={currentProject.image}
                alt={currentProject.name}
                className="project-image"
              />
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
      </div>
    </section>
  );
}

export default Projects;
