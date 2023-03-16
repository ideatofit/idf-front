import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps: {
  session, ...pageProps
}}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    )
}
