import dynamic from 'next/dynamic';
import Shared from '../Shared/Shared';
import styles from './Two.module.scss';

// const Shared = dynamic(() => import('../Shared/Shared'));

export default function Two() {
  return (
    <div className={styles.twoClass}>
      <Shared />
    </div>
  );
}
