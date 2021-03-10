import { forwardRef, MouseEvent } from "react";
import styles from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...rest }, ref) => {
    return (
      <button className={styles["button"]} ref={ref} {...rest}>
        {children}
      </button>
    );
  }
);

export default Button;
