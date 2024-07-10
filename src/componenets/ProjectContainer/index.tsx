import React from "react";
import styles from "./container.module.css";
import ProjectList from "../MyProject";

const projects = [
  {
    img: "https://via.placeholder.com/150",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "https://www.lipsum.com/",
  },
  {
    img: "https://via.placeholder.com/150",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "https://www.lipsum.com/",
  },
  {
    img: "https://via.placeholder.com/150",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "https://www.lipsum.com/",
  },
  {
    img: "https://via.placeholder.com/150",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "https://www.lipsum.com/",
  },
  {
    img: "https://via.placeholder.com/150",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "https://www.lipsum.com/",
  },
  {
    img: "https://via.placeholder.com/150",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "https://www.lipsum.com/",
  },
  {
    img: "https://via.placeholder.com/150",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "https://www.lipsum.com/",
  },
  {
    img: "https://via.placeholder.com/150",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "https://www.lipsum.com/",
  },
];

const ProjectContainer = () => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectTitle}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>Things I've built so far</p>
      </div>
      <ProjectList projects={projects} />
    </div>
  );
};

export default ProjectContainer;
