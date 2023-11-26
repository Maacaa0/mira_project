import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { chevronDown, chevronUp } from "../../assets/icons";

// type Navbar = {
//   setIsNavExpanded: () => void
// }

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  

  return (
    <nav className={styles.nav}>
      <a className={styles.logo} href="/">
        MK
      </a>

      <div className={styles.linksWrapper}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link to="/">O mně</Link>
          </li>
          <li className={styles.link}>
            <Link to="/cenik">Ceník</Link>
          </li>
          <li className={styles.link}>
            <button
              className={styles.galleryBtn}
              onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
              Galerie {isNavExpanded ? chevronUp : chevronDown}
            </button>
            {isNavExpanded && (
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
              <div onClick={()=>setIsNavExpanded(false)} className={styles.overlay}></div>
              </>
            )}
          </li>
          <li className={styles.link}><a href="#footer">Kontakt</a></li>
        </ul>
      </div>
    </nav>
  );
}
