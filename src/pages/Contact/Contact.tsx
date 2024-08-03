import styles from "./contact.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <ContactForm />
    </div>
  );
};