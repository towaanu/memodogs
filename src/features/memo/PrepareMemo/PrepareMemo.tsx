import { Link } from "react-router-dom";
import Button from "../../common/Button";
import SelectedCircle from "../../common/SelectedCircle";
import styles from "./PrepareMemo.module.css";

function PrepareMemo() {
  return (
    <div className={styles["prepare-memo-container"]}>
      <div className={styles["prepare-memo"]}>
        <div className={styles["selector-container"]}>
          <span className={styles["selector-label"]}> Mode </span>
          <div className={styles["card-topics-selector"]}>
            <SelectedCircle isSelected bigFont={true}>
              {" "}
              🐶{" "}
            </SelectedCircle>
            <SelectedCircle bigFont={true}> 🐱 </SelectedCircle>
            <SelectedCircle bigFont={true}> 🐦 </SelectedCircle>
          </div>
        </div>

        <div className={styles["selector-container"]}>
          <span className={styles["selector-label"]}> Difficulty </span>
          <div className={styles["difficulty-selector"]}>
            <SelectedCircle isSelected> Very easy </SelectedCircle>
            <SelectedCircle> Easy </SelectedCircle>
            <SelectedCircle> Medium </SelectedCircle>
            <SelectedCircle> Hard </SelectedCircle>
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
