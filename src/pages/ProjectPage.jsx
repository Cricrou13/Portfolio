import React from 'react';
import { projectData } from '../data/projectData';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from 'react-i18next';

const ProjectPage = () => {
    const { t } = useTranslation();
    return (
        <main className="projects-page page-container">
            <header className="page-header">
                <h1 className='section-title'>{t('projects_title')} <span className="accent">{t('projects_title_accent')}</span></h1>
                <p>{t('projects_subtitle')}</p>
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