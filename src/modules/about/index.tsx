import styles from "./index.module.scss";

function About() {

  return (
    <div className={styles["about-container"]}>
      <div className={styles["about-content"]}>
        <p className={styles["about-content__title"]}>
          Juan David Paladines Amaya
        </p>
        <p className={styles["about-content__description"]}>
          Frontend Developer
        </p>
      </div>
    </div>
  );
}

export default About;
