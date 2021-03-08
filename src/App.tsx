import "./theme/index.css";
import styles from "./App.module.css";
import Button from "./features/common/Button";

function App() {
  return (
    <div className={styles["App"]}>
      <Button> Start ! </Button>
    </div>
  );
}

export default App;
