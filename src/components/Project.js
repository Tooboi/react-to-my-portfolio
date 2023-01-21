import React from 'react';

export default function Project({ projects }) {
    // console.log(props);
    return ( 
        <div>
            {projects.map((project) => (
                <div key={project.id}>
                    {`${project.title}`}
                </div>
            ))}
        </div>
    )
}