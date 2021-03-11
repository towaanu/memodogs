import { Link } from "react-router-dom";
import Button from "../../common/Button";
import SelectedCircle from "../../common/SelectedCircle";
import styles from "./PrepareMemo.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMemoConfig,
  updateDifficulty,
  updateMode,
} from "../memoSetupSlice";
import { MemoDifficulty, MemoMode } from "../types";

function PrepareMemo() {
  const memoConfig = useSelector(selectMemoConfig);
  const dispatch = useDispatch();

  function isModeSelected(memoMode: MemoMode) {
    return memoConfig.mode === memoMode;
  }

  function isDifficultySelected(memoDifficulty: MemoDifficulty) {
    return memoConfig.difficulty === memoDifficulty;
  }

  function selectMode(memoMode: MemoMode) {
    dispatch(updateMode(memoMode));
  }

  function selectDifficulty(memoDifficulty: MemoDifficulty) {
    dispatch(updateDifficulty(memoDifficulty));
  }

  return (
    <div className={styles["prepare-memo-container"]}>
      <div className={styles["prepare-memo"]}>
        <div className={styles["selector-container"]}>
          <span className={styles["selector-label"]}> Mode </span>

          <div className={styles["card-topics-selector"]}>
            <SelectedCircle
              onClick={() => selectMode(MemoMode.Dog)}
              isSelected={isModeSelected(MemoMode.Dog)}
              bigFont={true}
            >
              🐶
            </SelectedCircle>
            <SelectedCircle
              onClick={() => selectMode(MemoMode.Cat)}
              isSelected={isModeSelected(MemoMode.Cat)}
              bigFont={true}
            >
              {" "}
              🐱{" "}
            </SelectedCircle>
            <SelectedCircle
              onClick={() => selectMode(MemoMode.Bird)}
              isSelected={isModeSelected(MemoMode.Bird)}
              bigFont={true}
            >
              {" "}
              🐦{" "}
            </SelectedCircle>
          </div>
        </div>

        <div className={styles["selector-container"]}>
          <span className={styles["selector-label"]}> Difficulty </span>
          <div className={styles["difficulty-selector"]}>
            <SelectedCircle
              onClick={() => selectDifficulty(MemoDifficulty.VeryEasy)}
              isSelected={isDifficultySelected(MemoDifficulty.VeryEasy)}
            >
              {" "}
              Very easy{" "}
            </SelectedCircle>
            <SelectedCircle
              onClick={() => selectDifficulty(MemoDifficulty.Easy)}
              isSelected={isDifficultySelected(MemoDifficulty.Easy)}
            >
              {" "}
              Easy{" "}
            </SelectedCircle>
            <SelectedCircle
              onClick={() => selectDifficulty(MemoDifficulty.Normal)}
              isSelected={isDifficultySelected(MemoDifficulty.Normal)}
            >
              {" "}
              Normal{" "}
            </SelectedCircle>
            <SelectedCircle
              onClick={() => selectDifficulty(MemoDifficulty.Hard)}
              isSelected={isDifficultySelected(MemoDifficulty.Hard)}
            >
              {" "}
              Hard{" "}
            </SelectedCircle>
          </div>
        </div>

        <Link to="/memo">
          <Button> Start ! </Button>
        </Link>
      </div>
    </div>
  );
}

export default PrepareMemo;
