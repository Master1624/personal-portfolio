import Navbar from "./modules/Navbar";
import AppRoutes from "./components/AppRoutes";
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
