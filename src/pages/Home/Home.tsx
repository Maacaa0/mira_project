import { facebookIcon, instagramIcon } from "../../assets/icons";
import styles from "./home.module.css";

import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  return (
    <>
      <main className={styles.home}>
        <div className={styles.fill}></div>
        <article className={styles.about}>
          <h1 className={styles.name}>Miroslav Kravec</h1>
          <h2 className={styles.subName}>Fotograf</h2>
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
          <a className={styles.icon} href="https://www.facebook.com/photoartmk">
            {facebookIcon}
          </a>
          <a className={styles.icon} href="https://www.instagram.com/miroslav_kravec">
            {instagramIcon}
          </a>
        </div>
      </main>
      <section className={styles.info}>
        <div className={styles.bgSpace}></div>
        <article className={styles.detail}>
          <div className={styles.detailImgWrapper}>
          <img
            className={styles.detailImg}
            src="./images/portrait1.jpg"
            alt="Fotka autora"
          />

          </div>
          <p className={styles.detailText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quos modi error est incidunt itaque, eaque dolore pariatur consectetur obcaecati laboriosam omnis dolores libero nihil cumque optio ut nulla molestiae? architecto qui quam autem quod tenetur ipsam doloremque aperiam voluptatibus!<br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugit cumque eos blanditiis, omnis recusandae eveniet, dolor placeat iure dolores pariatur, corrupti debitis libero vitae quia aperiam architecto autem possimus.
          </p>
        </article>
      </section>
      <Reviews />
    </>
  );
};

export default Home;
