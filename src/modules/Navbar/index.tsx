import { Link } from "react-router-dom";
import { links } from "./const";
import { Button, Card, CardContent } from "@mui/material";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <Card className={styles["navigation-card"]}>
      <CardContent className={styles["navigation-container"]}>
        {links.map((link) => (
          <Link key={link.name} to={link.linkPath}>
            <Button>
              {link.name}
            </Button>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}

export default Navbar;
