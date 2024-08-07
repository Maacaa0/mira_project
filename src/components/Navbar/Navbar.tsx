import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { hamburgerClose, hamburgerOpen } from "../../assets/icons";

// type Navbar = {
//   setgalleryExpanded: () => void
// }

export const Navbar = () => {
  // const [galleryExpanded, setgalleryExpanded] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <nav className={styles.nav}>
      <a className={styles.logo} href="/">
        MK
      </a>
      <button
        onClick={() => setNavExpanded(!navExpanded)}
        className={styles.hamburger}
      >
        {hamburgerOpen}
      </button>
      <div
        className={
          navExpanded ? styles.linksWrapper_shown : styles.linksWrapper_hidden
        }
      >
        <ul className={styles.links}>
          <button
            className={
              navExpanded ? styles.closeBtn_shown : styles.closeBtn_hidden
            }
            onClick={() => setNavExpanded(false)}
          >
            {hamburgerClose}
          </button>
          <li className={styles.link}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              onClick={() => setNavExpanded(false)}
              to="/"
            >
              O mně
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              onClick={() => setNavExpanded(false)}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              onClick={() => setNavExpanded(false)}
              to="/cenik"
            >
              Ceník
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              onClick={() => setNavExpanded(false)}
              to="/reference"
            >
              Reference
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              onClick={() => setNavExpanded(false)}
              to="/kontakt"
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
