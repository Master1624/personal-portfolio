import styles from "./Home.module.scss";

function Home() {
  return (
    <div
      transition-style="in:circle:bottom-right"
      className={styles["home-container"]}
    >
      <h1>¡ME PRESENTO! MI NOMBRE ES JUAN DAVID PALADINES AMAYA</h1>
      <p>
        Soy un desarrollador frontend con experiencia en React y TypeScript.
      </p>
    </div>
  );
}

export default Home;
