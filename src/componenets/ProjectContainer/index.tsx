"use client";

import React, { useEffect, useState } from "react";
import styles from "./container.module.css";
import ProjectList from "../MyProject";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwU76Wlwc-55i5XGm9cA6b1DwPgljkjOQ",
  authDomain: "my-portfolio-29f09.firebaseapp.com",
  projectId: "my-portfolio-29f09",
  storageBucket: "my-portfolio-29f09.appspot.com",
  messagingSenderId: "183966692903",
  appId: "1:183966692903:web:e4a44b7f010db15480c002",
  measurementId: "G-NYPW5J58YY"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fetchProjects = async () => {
  const projectsCollection = collection(db, "projects");
  const projectSnapshot = await getDocs(projectsCollection);
  const projectList = projectSnapshot.docs.map(doc => doc.data());
  return projectList;
};

const ProjectContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const projectsData = await fetchProjects();
      console.log("Fetched Projects:", projectsData);
      setProjects(projectsData);
    };
    getProjects();
  }, []);

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
