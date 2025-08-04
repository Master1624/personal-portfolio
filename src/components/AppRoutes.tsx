import { Route, Routes } from "react-router-dom";
import About from "../modules/About";
import Home from "../modules/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/personal-portfolio" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
}

export default AppRoutes;
