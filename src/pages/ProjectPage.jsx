import React from 'react';
import { projectData } from '../data/projectData';
import ProjectCard from '../components/ProjectCard';

const ProjectPage = () => {
    return (
        <main className="projects-page page-container">
            <header className="page-header">
                <h1>Mes <span className="accent">Projets</span></h1>
                <p>Découvrez mes réalisations récentes en développement Web.</p>
            </header>

            <section className="projects-grid">
                {projectData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </section>
        </main>
    );
};

export default ProjectPage;