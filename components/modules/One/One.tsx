import dynamic from 'next/dynamic';
import Shared from '../Shared/Shared';
import styles from './One.module.scss';

// const Shared = dynamic(() => import('../Shared/Shared'));

export default function One() {
  return <Shared className={styles.oneClass} color={'red'} />;
}
