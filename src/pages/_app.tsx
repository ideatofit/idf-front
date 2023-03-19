import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { SessionProvider } from "next-auth/react"
import Head from 'next/head';


export default function App({ Component, pageProps: {
  session, ...pageProps
} }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/logo.png" />
        <link rel="icon" type="image/png" href="/images/logo.png" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
