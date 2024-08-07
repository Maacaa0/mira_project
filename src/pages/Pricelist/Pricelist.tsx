import commonStyles from "../../common.module.css";
import styles from "./pricelist.module.css";

export const Pricelist = () => {
  return (
    <section className={commonStyles.pageWrapper}>
      <div className={styles.boxWrapper}>
        <article className={styles.box}>
          <h2>Balíček "PORTRÉT"</h2>
          <p className={styles.text}>
            Cca 2 hodiny fotografování ve vybrané lokalitě. <br /> 8 upravených
            fotografií dle výběru klienta <br /> Každá další fotografie nad
            rámec balíčku: 150,- Kč/fotografie
          </p>
          <div className={styles.boxBottom}>
            <p className={styles.price}>1500 Kč</p>
          </div>
        </article>

        <article className={styles.box}>
          <h2>Balíček "RODINA"</h2>
          <p className={styles.text}>
            8 upravených fotografií dle vlastního výběru 150,- Kč za každou
            další vybranou fotografii klientem <br />
            <b> Časová Náročnost</b>: <br /> Ideální čas na focení: 2 hodiny pro
            přirozené a uvolněné fotografie Nerad spěchám, abych zajistil
            kvalitní výsledky
          </p>
          <div className={styles.boxBottom}>
            <p className={styles.price}>2000 Kč</p>
          </div>
        </article>

        <article className={styles.box}>
          <h2>OSTATNÍ</h2>
          <p className={styles.text}>
            Pokud máte zájem o jinou formu focení, neváhejte mě kontaktovat a
            domluvíme se na detailech. <br /> (Ostatní focení se cení individuálně
            Možnost konkrétní cenové nabídky podle požadavků)
          </p>
          <div className={styles.boxBottom}>
            <p className={styles.price}>dle domluvy</p>
          </div>
        </article>
      </div>
    </section>
  );
};
