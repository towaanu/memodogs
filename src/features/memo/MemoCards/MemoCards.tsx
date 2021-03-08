import {MemoCard as MemoCardType} from '../types';
import MemoCard from '../MemoCard';
import styles from './MemoCards.module.css';

interface Props {
    memoCards: Array<MemoCardType>
}

function MemoCards({memoCards}:Props) {
    return (
    <div className={styles['memo-cards']}>
	 {memoCards.map(memoCard => (
	     <div key={memoCard.image} className={styles['memo-card-item']} >
		 <MemoCard  memoCard={memoCard} />
	     </div>)
	 )}
    </div>
    )
}

export default MemoCards
