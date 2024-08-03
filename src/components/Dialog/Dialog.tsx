import styles from "./dialog.module.css";
interface ConfirmDialogProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  isOpen: boolean;
}
export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  message,
  onConfirm,
  onCancel,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onCancel}></div>
      <dialog className={styles.dialog} open>
        <form method="dialog">
          <p>{message}</p>
          <menu className={styles.menu}>
            <button className={styles.button} onClick={onCancel}>
              Ne
            </button>
            <button className={styles.button} onClick={onConfirm}>
              Ano
            </button>
          </menu>
        </form>
      </dialog>
    </>
  );
};
