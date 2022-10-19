// import '../styles/globals.css'
import dynamic from 'next/dynamic';
import '../styles/styles.scss';
import type { AppProps } from 'next/app';
// import TestComponent from '../components/common/TestComponent/TestComponent';
// const TestComponent = dynamic(
//   () => import('../components/common/TestComponent/TestComponent')
// );

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <TestComponent /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
