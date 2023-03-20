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
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
              <link rel="manifest" href="/images/site.webmanifest"/>
              </Head>
              <SessionProvider session={session}>
                <Component {...pageProps} />
              </SessionProvider>
            </>
            )
}
