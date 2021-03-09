import { Link } from "react-router-dom";
import Button from "../../common/Button";
import styles from "./PrepareMemo.module.css";

function PrepareMemo() {
  return (
    <div className={styles["prepare-memo"]}>
      <Link to="/memo">
        <Button> Start ! </Button>
      </Link>
    </div>
  );
}

export default PrepareMemo;
