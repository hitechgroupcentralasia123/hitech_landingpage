import React from 'react';
import ProjectItem from './ProjectsItem';

const projects = [
  { name: 'Chilik 1 SPP (20 MW)', details: '...' },
  { name: 'Burabay SPP (50 MW)', details: '...' },
  // добавьте остальные проекты
];

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </section>
  );
}

export default Projects;
