import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { useState } from "react";

const Navbar = () => {
  const [state, setState] = useState({ clicked: false });
  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };
  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo">TripKaro</h1>
      <div className="menu-icons">
        <i
          onClick={handleClick}
          className={state.clicked ? "fas fa-times" : "fas fa-bars"}
        ></i>
      </div>

      <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
