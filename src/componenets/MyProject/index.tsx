import React from 'react';
import styles from './myProjects.module.css';

interface Project {
  img: string;
  text: string;
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
          <img src={project.img} alt={`Project ${index + 1} Thumbnail`} className={styles.projectImage} />
          <div className={styles.projectContent}>
            <p className={styles.projectText}>{project.text}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>GitHub Link</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
