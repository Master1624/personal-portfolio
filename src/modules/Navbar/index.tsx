import { Link } from "react-router-dom";
import { links } from "./const";
import { Button } from "@mui/material";
import styles from "./Navbar.module.scss"

function Navbar() {
  return (
    <div className={styles["navigation-container"]}>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.linkPath}
        >
          <Button>{link.name}</Button>
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
