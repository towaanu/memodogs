import {MemoCard as MemoCardType} from '../types';
import styles from './MemoCard.module.css';

interface Props {
    memoCard: MemoCardType
}

function MemoCard({memoCard}: Props) {
    return (
    <div className={styles['memo-card']}>
	<img src={memoCard.image} />
    </div>
    )
}

export default MemoCard
