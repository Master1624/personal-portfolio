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
      <div className={styles["information-container"]}>
        <div className={styles["location-container"]}>
          <strong>
            <p>Location:</p>
          </strong>
          <p>Chía, Cundinamarca, Colombia</p>
        </div>
        <div className={styles["email-container"]}>
          <strong>
            <p>Email:</p>
          </strong>
          <p>jdpa83@gmail.com</p>
        </div>
        <div className={styles["linkedin-container"]}>
          <strong>
            <p>LinkedIn:</p>
          </strong>
          <a
            href="https://www.linkedin.com/in/juan-david-paladines-amaya/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/juan-david-paladines-amaya/
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
