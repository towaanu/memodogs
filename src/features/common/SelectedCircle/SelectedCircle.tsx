import styles from "./SelectedCircle.module.css";
import { MouseEvent } from "react";

interface Props {
  children: React.ReactNode;
  isSelected?: boolean;
  bigFont?: boolean;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

function SelectedCircle({ isSelected, bigFont, children, ...rest }: Props) {
  return (
    <div
      className={`
	${styles["selected-circle"]} 
	${isSelected ? styles["is-selected"] : ""}
	${bigFont ? styles["big-font"] : ""}
	`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default SelectedCircle;
