import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {initMemo, selectMemoCards} from './memoSlice';
import MemoCards from './MemoCards';

function MemoGame() {
  const dispatch = useDispatch();
  const memoCards = useSelector(selectMemoCards);

  useEffect(() => {
      dispatch(initMemo(10))
  }, [dispatch])

  return (<>
      <MemoCards memoCards={memoCards} />
  </>);
}

export default MemoGame;
