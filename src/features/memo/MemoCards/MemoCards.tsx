import { MemoCard as MemoCardType } from "../types";
import MemoCard from "../MemoCard";
import { pickCard } from "../memoSlice";
import { useDispatch } from "react-redux";
import styles from "./MemoCards.module.css";

interface Props {
  memoCards: Array<MemoCardType>;
}

function MemoCards({ memoCards }: Props) {
  const dispatch = useDispatch();

  function handleCard(index: number) {
    dispatch(pickCard(index));
  }

  console.log("MEMO CARDS ", memoCards.length, "==> styles", styles);
  const memoCardsStyle = styles[`memo-cards-${memoCards.length}`];

  return (
    <div className={`${styles["memo-cards"]} ${memoCardsStyle}`}>
      {memoCards.map((memoCard, index) => (
        <div
          key={index}
          className={styles["memo-card-item"]}
          onClick={(_e) => handleCard(index)}
        >
          <MemoCard memoCard={memoCard} />
        </div>
      ))}
    </div>
  );
}

export default MemoCards;
