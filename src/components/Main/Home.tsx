import { facebookIcon, instagramIcon } from "../../assets/icons";
import styles from "./home.module.css";
const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.fill}></div>
        <article className={styles.about}>
          <h1 className={styles.name}>Miroslav Kravec</h1>
          <p className={styles.text}>
            Jsem rodilý Turnovák a stále tu žiji. K fotografii mě přivedl můj
            táta. Jako kluk jsem mu asistoval při vyvolávání fotografií z
            kinofilmu v provizorní temné komoře na půdě našeho domu. Práce s
            fotkami a pořizování záběrů vůbec mě zaujaly natolik, že jsem se v
            dospělosti stal kameramanem soukromé televize. Později jsem pracoval
            i jako fotograf a fotoeditor v tištěných novinách.
          </p>
        </article>
        <div className={styles.socials}>
          <a className={styles.icon} href="#">
            {facebookIcon}
          </a>
          <a className={styles.icon} href="#">{instagramIcon}</a>
        </div>
      </div>
    </>
  );
};

export default Home;
