import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { motion } from "framer-motion";

import 'react-quill/dist/quill.snow.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: any) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url: any) => (url === router.asPath) && setTimeout(() => { setLoading(false) }, 3000);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return loading && (<div className='spinner-wrapper'>
    <div className="spinner"></div></div>)
}
export default function App({ Component, pageProps, router }: AppProps) {

  return (
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <div className="unselect">
      <Component {...pageProps} />
      </div>
    </motion.div>
  )
}
