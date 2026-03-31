import React from 'react';
import { projectData } from '../data/projectData';
import ProjectCard from './ProjectCard';

const Projects =() => {
    return (
        <div className="container">
            <section id="projects" className="projects">
                <h2>Mes<span className='accent'>Projets</span></h2>
                    <div className="project-grid">
            {projectData.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
                    </div>
             </section>
        </div>   
    );
}

export default Projects;