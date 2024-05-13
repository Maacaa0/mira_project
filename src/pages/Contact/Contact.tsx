import styles from "./contact.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <ContactForm />
    </div>
  );
};

export default Contact;
