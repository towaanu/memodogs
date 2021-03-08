import { forwardRef } from "react";
import styles from "./Button.module.css";

interface Props {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>(({ children }, ref) => {
  return (
    <button className={styles["button"]} ref={ref}>
      {children}
    </button>
  );
});

export default Button;
