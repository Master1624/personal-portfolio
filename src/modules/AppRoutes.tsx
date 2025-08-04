import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/personal-portfolio" element={<Home />}></Route>
    </Routes>
  );
}

export default AppRoutes;
