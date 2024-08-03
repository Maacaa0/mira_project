import { facebookIcon, instagramIcon } from "../../assets/icons";
import styles from "./footer.module.css";

export const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <>
      <footer id="footer" className={styles.footer}>
        <div className={styles.contact}>
          Miroslav Kravec <br />{" "}
          <a href="tel:+420737380802">+420 737 380 802</a> <br />
          <a href="mailto:czemira@seznam.cz">czemira@seznam.cz </a>
          <br /> <br /> FB: photoartmmk <br /> IG: miroslav_kravec <br /> IČO:
          19541236
        </div>

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
          <a className={styles.logo} href="/">
        MK
      </a>
        </div>
      </footer>
      <p className={styles.copyright}>
        &copy; {year} | Czech Republic | Miroslav Kravec
      </p>
    </>
  );
};

