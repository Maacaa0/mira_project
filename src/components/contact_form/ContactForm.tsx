import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contactForm.module.css";
import { checkIcon, errorIcon, loadingIcon } from "../../assets/icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const [state, setState] = useState<"SUCCESS" | "ERROR" | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const formSchema = z.object({
    from_name: z
      .string()
      .transform((val) => val.replace(/\s+/g, ""))
      .pipe(z.string().min(1, { message: "Prosím vyplňte vaše jméno." })),
    from_email: z
      .string()
      .transform((val) => val.replace(/\s+/g, ""))
      .pipe(
        z
          .string()
          .min(1, { message: "Prosím vyplňte váš e-mail." })
          .email({ message: "Neplatný formát e-mailu." })
      ),
    message: z
      .string()
      .transform((val) => val.replace(/\s+/g, ""))
      .pipe(
        z.string().min(10, { message: "Minimální délka zprávy je 10 znaků." })
      ),
  });

  type Inputs = z.infer<typeof formSchema>;

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = () => {
    setIsSubmitting(true);

    if (form.current) {
      emailjs
        .sendForm("service_lznlroy", "template_44flpgu", form.current, {
          publicKey: "qzGlSFQToNQVLXSK8",
        })
        .then(
          () => {
            setState("SUCCESS");
            setStateMessage(
              "Formulář byl úspěšně odeslán.\n  Ozvu se vám hned jakmile to bude možné."
            );
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 10000);
            reset();
          },
          (error) => {
            console.log(error);
            setState("ERROR");
            setStateMessage(
              "Formulář se nepodařilo odeslat. Zkuste to prosím znovu, nebo mě kontaktujte na e-mail či na sociálních sítích."
            );
            setIsSubmitting(false);
          }
        );
    }
  };

  return (
    <form
      ref={form}
      className={styles.container}
      onSubmit={handleSubmit(onSubmit)}
    >
      <p>Pokud se chcete domluvit na spolupráci, nebo máte nějaké otázky, <b>neváhejte se mi ozvat na e-mail pomocí formuláře níže.</b></p>
      <div className={styles.inputWrapper}>
        <label>Vaše jméno</label>
        <input
          type="text"
          {...register("from_name")}
          className={styles.input}
          style={{ borderColor: errors.from_name && "var(--error-clr)" }}
        />
        {errors.from_name && (
          <p className={styles.errorMessage}>{errors.from_name.message}</p>
        )}
      </div>

      <div className={styles.inputWrapper}>
        <label>Váš e-mail</label>
        <input
          type="text"
          {...register("from_email")}
          className={styles.input}
          style={{ borderColor: errors.from_email && "var(--error-clr)" }}
        />
        {errors.from_email && (
          <p className={styles.errorMessage}>{errors.from_email.message}</p>
        )}
      </div>

      <div className={styles.inputWrapper}>
        <label>Zpráva</label>
        <textarea
          {...register("message")}
          className={styles.input}
          style={{ borderColor: errors.message && "var(--error-clr)" }}
        />
        {errors.message && (
          <p className={styles.errorMessage}>{errors.message.message}</p>
        )}
      </div>

      <button type="submit" className={styles.btn} disabled={isSubmitting}>
        {isSubmitting ? loadingIcon : "Odeslat"}
      </button>
      {stateMessage && (
        <p
          className={styles.submitMessage}
          style={{ color: state === "SUCCESS" ? "lightgreen" : "var(--error-clr)" }}
        >
          {state === "SUCCESS" ? checkIcon : errorIcon}
          {stateMessage}
        </p>
      )}
    </form>
  );
};
export default ContactForm;