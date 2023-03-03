import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}
