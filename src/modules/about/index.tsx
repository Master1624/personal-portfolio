import styles from "./index.module.scss";

function About() {
  return (
    <div
      transition-style="in:circle:bottom-right"
      className={styles["about-container"]}
    >
      <div className={styles["about-content"]}>
        <h1 className={styles["about-content__title"]}>
          Juan David Paladines Amaya
        </h1>
        <p className={styles["about-content__description"]}>
          Frontend Developer
        </p>
      </div>
    </div>
  );
}

export default About;
