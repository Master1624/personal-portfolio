import { Link } from "react-router-dom";
import { links } from "./const";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.name} >
              <Link to={link.linkPath}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
