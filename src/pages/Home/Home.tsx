import { Link } from "react-router-dom";
import { facebookIcon, instagramIcon } from "../../assets/icons";
import { Image, Reviews } from "../../components";
import styles from "./home.module.css";
import InstagramFeed from "../../components/instagram_feed/InstagramFeed";

export const Home = () => {
  return (
    <>
      <main className={styles.home}>
        <div className={styles.fill}></div>
        <article className={styles.about}>
          <h1 className={styles.name}>Miroslav Kravec</h1>
          {/* <h2 className={styles.subName}>Fotograf</h2> */}
          <p className={styles.text}>
            {/* Vítejte na mé fotografické stránce! <br /> */}
            <br /> Jsem Váš <strong>profesionální fotograf</strong>, který se
            specializuje na širokou škálu fotografií. Mým cílem je zachytit
            krásu a jedinečnost okamžiku prostřednictvím mého objektivu.
          </p>
        </article>
        <div className={styles.socials}>
          <a
            className={styles.icon}
            target="_blank"
            href="https://www.facebook.com/photoartmk"
          >
            {facebookIcon}
          </a>
          <a
            className={styles.icon}
            target="_blank"
            href="https://www.instagram.com/miroslav_kravec"
          >
            {instagramIcon}
          </a>
        </div>
      </main>
      <section className={styles.info}>
        {/* <div className={styles.bgSpace}></div> */}
        <article className={styles.detail}>
          <div className={styles.detailImgWrapper}>
            <Image
              className={styles.detailImg}
              src="./images/portrait1.jpg"
              alt="Fotka autora"
            />
          </div>
          <p className={styles.detailText}>
            Co ode mně můžete očekávat? Fotím různé žánry.
            <br />
            Zajímá mě každý jedinečný <strong>portrét</strong> a rád zachytím
            vaši osobnost v každém snímku.
            <br />
            Dokážu zachytit energii a atmosféru vaší <strong>
              události
            </strong>{" "}
            tak, aby každý snímek vyprávěl příběh.
          </p>
        </article>
        <article className={styles.detailReversed}>
          <div className={styles.detailImgWrapper}>
            <Image
              className={styles.detailImgReversed}
              src="./images/7.jpg"
              alt="Fotka autora"
            />
          </div>
          <p className={styles.detailText}>
            <strong>Glamour a Akty.</strong>
            <br /> Umím si pohrát se světlem a stínem, abych vytvořil elegantní
            a vkusné snímky pro váš osobní nebo profesionální portfólio.
            <br /> Zamiloval jsem se do krásy{" "}
            <strong>městských uliček i přírody</strong>. Moje fotografie
            přinášejí moji osobní perspektivu na prostředí kolem nás.
          </p>
        </article>
        <article className={styles.detail}>
          <div className={styles.detailImgWrapper}>
            <Image
              className={styles.detailImg}
              src="./images/crops.jpg"
              alt="Fotka autora"
            />
          </div>
          <p className={styles.detailText}>
            <strong>Jsem schopen fotografovat po celé České republice.</strong>{" "}
            Díky velkým bateriovým zábleskům a flexibilitě mohu vytvořit
            "ateliér" prakticky kdekoliv.
            <br />
            Nabízím také služby{" "}
            <strong>fotografování firemních portrétů</strong> a dokumentace
            firem.{" "}
            <strong>
              Pomůžu vám prezentovat vaši firmu profesionálním způsobem.
            </strong>
          </p>
        </article>

        <p className={styles.centeredText}>
          <strong>
            Jsem otevřený spolupráci na projektech pro dobročinné organizace a
            neziskové sektory.
          </strong>{" "}
          <br />
          <br />
          <br /> Pokud hledáte <strong>zkušeného fotografa</strong>, který
          dokáže zachytit krásu každého okamžiku,{" "}
          <Link className={styles.contactLink} relative="path" to="/kontakt">
            <b>neváhejte mě kontaktovat.</b>
          </Link>{" "}
          Společně můžeme vytvořit nezapomenutelné obrázky, které budete moci
          opakovaně prožívat.
          <br />
          <br />
          <br /> Níže si můžete přečíst některé z referencí mých klientek a
          klientů.
        </p>
        <Reviews />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <InstagramFeed url={"https://www.instagram.com/miroslav_kravec/"} />
        </div>
      </section>
    </>
  );
};
