import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { hamburgerClose, hamburgerOpen } from "../../assets/icons";

// type Navbar = {
//   setgalleryExpanded: () => void
// }

export default function Navbar() {
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
            <Link onClick={() => setNavExpanded(false)} to="/">O mně</Link>
          </li>
          <li className={styles.link}>
            <Link onClick={() => setNavExpanded(false)} to="/portfolio">Portfolio</Link>
          </li>
          <li className={styles.link}>
            <Link onClick={() => setNavExpanded(false)} to="/cenik">Ceník</Link>
          </li>
          <li className={styles.link}>
            <a onClick={() => setNavExpanded(false)} href="#footer">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

{
  /* <button
              className={styles.galleryBtn}
              onClick={() => setgalleryExpanded(!galleryExpanded)}
            >
              Galerie {galleryExpanded ? chevronUp : chevronDown}
            </button>
            {galleryExpanded && (
              <>
                <ul className={styles.galleryOptions}>
                  <li className={styles.galleryOption}>
                    <Link to={"/"}>Text odkazu 1</Link>
                  </li>
                  <li className={styles.galleryOption}>
                    <Link to={"/"}>Text odkazu 2</Link>
                  </li>
                  <li className={styles.galleryOption}>
                    <Link to={"/"}>Text odkazu 3</Link>
                  </li>
                </ul>
                <div
                  onClick={() => setgalleryExpanded(false)}
                  className={styles.overlay}
                ></div>
              </>
            )} */
}
