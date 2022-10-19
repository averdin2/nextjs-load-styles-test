import dynamic from 'next/dynamic';
import React from 'react';
// import TestComponent from '../components/common/TestComponent/TestComponent';
// import AnotherTest from '../components/common/AnotherTest/AnotherTest';
// const TestComponent = dynamic(
//   () => import('../components/common/TestComponent/TestComponent')
// );
// const AnotherTest = dynamic(
//   () => import('../components/common/AnotherTest/AnotherTest')
// );
// import One from '../components/modules/One/One';
// import Two from '../components/modules/Two/Two';

const One = dynamic(() => import('../components/modules/One/One'));
const Two = dynamic(() => import('../components/modules/Two/Two'));
export default function TestPage() {
  return (
    <>
      {/* <TestComponent /> */}
      {/* <AnotherTest /> */}
      <One />
      <Two />
      <p>Test Page</p>
    </>
  );
}
