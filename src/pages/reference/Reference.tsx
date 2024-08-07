import styles from "./reference.module.css";
import commonStyles from "../../common.module.css";

export const Reference = () => {
  return (
    <div className={commonStyles.pageWrapper}>
      <section className={commonStyles.heading}>
        <h3>Zde jsou mé reference</h3>
        <article className={styles.article}>
          <div className={styles.text}>
            <h4 className={styles.articleHeading}>
              Fotografování pro death-black metalovou kapelu{" "}
              <a
                href="https://www.purnama.cz/"
                target="_blank"
                className={styles.link}
              >
                PURNAMA
              </a>
            </h4>
            <p className={styles.textDetail}>
              Fotky použity pro benefiční kalendář na pomoc nemocným sourozencům
              a booklet nově vydaného CD alba
            </p>
          </div>
          <img
            className={styles.img}
            src="/images/ref/purnama_ref.jpg"
            alt="purnama image"
          />
        </article>

        <p style={{ marginTop: "2rem" }}>
          Reference: PURNAMA: <br /> Fotografování pro death-black metalovou
          kapelu Fotky použity pro benefiční kalendář na pomoc nemocným
          sourozencům a booklet nově vydaného CD alba <br />
          <br /> TURN-OFF ROCKFEST: <br /> Fotografování každoročního rockového
          festivalu v Turnově <br />
          <br /> MĚSTSKÁ POLICIE MNÍŠEK POD BRDY: <br /> Fotografování kalendáře{" "}
          <br />
          <br /> ARMÁDA ČR: <br /> Fotografování v rámci 31. pluku Radiační,
          Chemické a Biologické Ochrany v Liberci <br /> Fotografie z cvičení v
          útvaru i na mezinárodní úrovni JOINT CHEMICAL, BIOLOGICAL,
          RADIOLOGICAL AND NUCLEAR DEFENCE CENTRE OF EXCELLENCE <br />
          Fotografování mezinárodních kurzů pro tištěnou i elektronickou
          propagaci <br />
          <br /> ARMYTRIKA: <br /> Nafocení propagačních fotografií na téma
          zombie apokalypsy <br />
          <br /> QUANTUM CZECH: <br /> Reklamní fotografie pro výrobce luxusních
          postelí <br />
          <br /> MĚSTO TURNOV: <br /> Fotografie města použity pro kalendář a
          knihu k výročí 750 let od založení města <br />
          <br /> STUDIO LHOTSKY: <br />
          Fotografování firemních a autorských portrétů pro předního Českého
          uměleckého skláře Fotografování výroby skleněné plastiky
        </p>
      </section>
    </div>
  );
};
