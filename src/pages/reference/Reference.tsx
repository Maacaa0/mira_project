import styles from "./reference.module.css";
import commonStyles from "../../common.module.css";
import reference from "../../../public/editable/reference_edit";
import { Image } from "../../components";

export const Reference = () => {
  const references = reference.map((ref, index) => {
    return (
      <article className={styles.article} key={ref.name + index}>
        <div className={styles.text}>
          <h4 className={styles.articleHeading}>{ref.name}</h4>
          <p className={styles.textDetail}>{ref.text}</p>
        </div>
        <Image className={styles.img} src={ref.img} alt={ref.name} />
      </article>
    );
  });

  return <section className={commonStyles.pageWrapper}>{references}</section>;
};
