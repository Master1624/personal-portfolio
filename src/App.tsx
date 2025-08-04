import Navbar from "./modules/Navbar";
import AppRoutes from "./modules/AppRoutes";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles["app-container"]}>
      <AppRoutes />
      <Navbar />
    </div>
  );
}

export default App;
