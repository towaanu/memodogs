import styles from "./Modal.module.css";

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
}

function Modal({ children, isOpen }: Props) {
  return (
    <div
      className={`${styles["modal-container"]} ${
        isOpen ? styles["is-open"] : ""
      }`}
    >
      <div className={styles["modal"]}>{children}</div>
    </div>
  );
}

export default Modal;
