import { MemoCard as MemoCardType } from "../types";
import styles from "./MemoCard.module.css";

interface Props {
  memoCard: MemoCardType;
}

function MemoCard({ memoCard }: Props) {
  return (
    <div
      className={`${styles["memo-card"]} ${
        memoCard.isHidden ? "" : styles["is-flipped"]
      }`}
    >
      <div className={`${styles["front"]} ${styles["face"]}`}>
        <img alt={memoCard.image} src={memoCard.image} />
      </div>

      <div className={`${styles["back"]} ${styles["face"]}`}></div>
    </div>
  );
}

export default MemoCard;
