import dynamic from 'next/dynamic';
import React from 'react';
import styles from './TestComponent.module.scss';

// import AnotherTest from '../AnotherTest/AnotherTest';
const AnotherTest = dynamic(() => import('../AnotherTest/AnotherTest'));

export default function TestComponent() {
  return (
    <div>
      <p className={styles.hello}>Test Component</p>
      <AnotherTest />
    </div>
  );
}
