import React from "react";

const ProjectItem = ({ name, details, isOpen, onClick }) => {
  return (
    <div className="project-item">
      <div className="project-header" onClick={onClick}>
        <span>{name}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && <div className="project-details">{details}</div>}
    </div>
  );
};

export default ProjectItem;
