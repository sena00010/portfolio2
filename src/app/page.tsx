import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/componenets/Navbar";
import Description from "@/componenets/Description";
import Stack from "@/componenets/Stack";
import ProjectContainer from "@/componenets/ProjectContainer";

export default function Home() {
  return (
    <main className={styles.main}>
     <div className={styles.container}>
      <Navbar/>
      <Description/>
      <Stack/>
      <ProjectContainer/>
     </div>
    </main>
  );
}
