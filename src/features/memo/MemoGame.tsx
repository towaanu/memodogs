import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initMemo, selectMemoCards } from "./memoSlice";
import MemoCards from "./MemoCards";
import GameFinishModal from "./GameFinishModal";

function MemoGame() {
  const dispatch = useDispatch();
  const memoCards = useSelector(selectMemoCards);

  useEffect(() => {
    dispatch(initMemo(5));
  }, [dispatch]);

  return (
    <>
      <GameFinishModal />
      <MemoCards memoCards={memoCards} />
    </>
  );
}

export default MemoGame;
