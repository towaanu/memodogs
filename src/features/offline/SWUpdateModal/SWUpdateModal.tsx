import Modal from "../../common/Modal";
import Button from "../../common/Button";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectWaitingWorker, registerWaitingWorker } from "../offlineSlice";
import * as serviceWorkerRegistration from "../../../serviceWorkerRegistration";
import styles from "./SWUpdateModal.module.css";

function SWUpdateModal() {
  const waitingWorker = useSelector(selectWaitingWorker);
  const dispatch = useDispatch();

  useEffect(() => {
    serviceWorkerRegistration.register({
      onUpdate: (swRegistration: ServiceWorkerRegistration) =>
        dispatch(registerWaitingWorker(swRegistration.waiting)),
    });
  }, [dispatch]);

  function handleUpdateNewVersion() {
    if (!waitingWorker) return;

    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    window.location.reload(true);
  }

  return (
    <Modal isOpen={!!waitingWorker}>
      <h1> There is a new version available !</h1>
      <div className={styles["button-container"]}>
        <Button onClick={handleUpdateNewVersion}>Refresh and update</Button>
      </div>
    </Modal>
  );
}

export default SWUpdateModal;
