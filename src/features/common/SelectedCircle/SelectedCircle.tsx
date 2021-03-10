import styles from "./SelectedCircle.module.css";

interface Props {
  children: React.ReactNode;
  isSelected?: boolean;
  bigFont?: boolean;
}

function SelectedCircle({ isSelected, bigFont, children }: Props) {
  return (
    <div
      className={`
	${styles["selected-circle"]} 
	${isSelected ? styles["is-selected"] : ""}
	${bigFont ? styles["big-font"] : ""}
	`}
    >
      {children}
    </div>
  );
}

export default SelectedCircle;
