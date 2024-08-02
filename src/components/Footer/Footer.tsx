import { facebookIcon, instagramIcon } from "../../assets/icons";
import styles from "./footer.module.css";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.socials}>
        <a className={styles.icon} href="https://www.facebook.com/photoartmk">
          {facebookIcon}
        </a>
        <a
          className={styles.icon}
          href="https://www.instagram.com/miroslav_kravec"
        >
          {instagramIcon}
        </a>
      </div>
      <small className={styles.copyright}>
        &copy; {year} | Czech Republic | Miroslav Kravec
      </small>
    </footer>
  );
};

export default Footer;
