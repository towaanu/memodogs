import Modal from "../../common/Modal";
import Button from "../../common/Button";
import styles from "./GameFinishModal.module.css";
import { selectIsGameDone, initMemo } from "../memoSlice";
import { selectMemoConfig } from "../../memoSetup/memoSetupSlice";
import { useSelector, useDispatch } from "react-redux";
import { MouseEvent } from "react";
import { useHistory } from "react-router-dom";

function GameFinishModal() {
  const isGameDone = useSelector(selectIsGameDone);
  const memoConfig = useSelector(selectMemoConfig);
  const dispatch = useDispatch();
  const history = useHistory();

  function handlePlayAgain(_e: MouseEvent<HTMLButtonElement>) {
    dispatch(initMemo(memoConfig));
  }

  function handleBackToHome() {
    history.replace("/");
  }

  return (
    <Modal isOpen={isGameDone}>
      <div className={styles["game-finish-modal"]}>
        <h1> You won ! :) </h1>
        <div className={styles["action-buttons"]}>
          <Button onClick={handleBackToHome}>Back home</Button>
          <Button onClick={handlePlayAgain}>Play again ? </Button>
        </div>
      </div>
    </Modal>
  );
}

export default GameFinishModal;
