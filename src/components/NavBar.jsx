import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink> {/* Link to the Home page */}
      <NavLink to="/directors">Directors</NavLink> {/* Link to the Directors page */}
      <NavLink to="/actors">Actors</NavLink> {/* Link to the Actors page */}
    </nav>
  );
};

export default NavBar;