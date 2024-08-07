import styles from "./contact.module.css";
import commonStyles from "../../common.module.css";
import ContactForm from "../../components/contact_form/ContactForm";

export const Contact = () => {
  return (
    <div className={commonStyles.pageWrapper}>
      <article className={commonStyles.heading}>
        {/* <h3>Cenik</h3> */}
      </article>
      <div className={styles.contact}>
        <ContactForm />
      </div>
    </div>
  );
};
