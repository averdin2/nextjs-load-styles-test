import styles from './Shared.module.scss';

export default function Shared(props: any) {
  return (
    <div className={`${styles.theClass} ${props.className}`}>
      {' '}
      This should be always {props.color || 'blue'}
    </div>
  );
}
