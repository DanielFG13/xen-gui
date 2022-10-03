import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/Xen-Fu-Panda.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar--container">
        <div className="logo--container">
          <NavLink to="/">
            <img className="xen-logo" src={logo} alt="xen-logo"></img>
          </NavLink>
          <p className="logo--name">
            <code>xen-gui</code>
          </p>
        </div>
        <div className="list--container">
          <ul className="nav--list">
            <li className="nav--item">
              <NavLink
                className={({ isActive }) =>
                  "nav--link" + (isActive ? " nav--link--active" : "")
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav--item">
              <NavLink
                className={({ isActive }) =>
                  "nav--link" + (isActive ? " nav--link--active" : "")
                }
                to="/xen-configuration"
              >
                Instalación & configuración
              </NavLink>
            </li>
            <li className="nav--item">
              <NavLink
                className={({ isActive }) =>
                  "nav--link" + (isActive ? " nav--link--active" : "")
                }
                to="/my-vm"
              >
                Mis máquinas virtuales
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
