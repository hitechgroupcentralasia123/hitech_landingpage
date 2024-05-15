import React from 'react';

function ProjectItem({ project }) {
  return (
    <div className="project-item">
      <h3>{project.name}</h3>
      <p>{project.details}</p>
    </div>
  );
}

export default ProjectItem;
