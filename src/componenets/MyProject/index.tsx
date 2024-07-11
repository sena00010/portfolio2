import React from 'react';
import styles from './myProjects.module.css';

interface Project {
  image: string;
  name:string;
  description: string;
  link: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className={styles.projectList}>
      {projects.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <img src={project.image} alt={`Project ${index + 1} Thumbnail`} className={styles.projectImage} />
          <div className={styles.projectContent}>
            <p className={styles.projectText}>{project.description}</p>
            <p className={styles.projectText}>{project.name}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>GitHub Link</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
