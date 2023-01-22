import React from 'react';

export default function Project({ projects }) {
  console.log(projects);
  return (
    <div className="flex flex-wrap justify-content-center align-content-start align-items-start">
      {projects.map((project) => (
        <div className="flex flex-column glass-2 m-4 p-3" key={project.id}>
          <div className="image-wrapper">
            <img src={project.image} alt={project.title} className="project-img"></img>
          </div>
          <div>{`${project.title}`}</div>
        </div>
      ))}
    </div>
  );
}
