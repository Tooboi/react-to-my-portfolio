import React from 'react';

export default function Project({ projects }) {
    console.log(projects);
    // console.log(projects[0].image);
    return ( 
        <div>
            {projects.map((project) => (
                <div key={project.id}>
                    <img src={project.image} alt={project.title} className='project-img'></img>
                    
                    {`${project.title}`}
                </div>
            ))}
        </div>
    )
}