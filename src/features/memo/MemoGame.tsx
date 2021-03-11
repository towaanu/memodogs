import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initMemo, selectMemoCards } from "./memoSlice";
import MemoCards from "./MemoCards";
import GameFinishModal from "./GameFinishModal";
import { selectMemoConfig } from "../memoSetup/memoSetupSlice";

function MemoGame() {
  const dispatch = useDispatch();
  const memoCards = useSelector(selectMemoCards);
  const memoConfig = useSelector(selectMemoConfig);

  useEffect(() => {
    dispatch(initMemo(memoConfig));
  }, [dispatch, memoConfig]);

  return (
    <>
      <GameFinishModal />
      <MemoCards memoCards={memoCards} />
    </>
  );
}

export default MemoGame;
