import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {initMemo} from './memoSlice';

function MemoGame() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(initMemo(3))
  }, [dispatch])

  return <h1> Memo game ! </h1>;
}

export default MemoGame;
