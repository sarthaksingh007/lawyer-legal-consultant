import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { GoLaw } from "react-icons/go";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar sm:px-4">
      <div className="container">
        <div className="logo">
          <GoLaw className="text-5xl" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <RiMenu4Line className="text-5xl" />
        </div>
        <div className={`nav-elements z-50  ${showNavbar && "active"}`}>
          <ul>
            <li onClick={handleShowNavbar}>
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li onClick={handleShowNavbar}>
              <NavLink to="/blogs">Blogs</NavLink>
            </li> */}
            <li onClick={handleShowNavbar}>
              <NavLink to="/legal-consultant">legal-consultant</NavLink>
            </li>
            <li onClick={handleShowNavbar}>
              <NavLink to="/aboutus">About</NavLink>
            </li>
            <li onClick={handleShowNavbar}>
              <NavLink to="/contactus">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
