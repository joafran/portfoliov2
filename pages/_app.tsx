import '../styles/global.css'
import { AppProps } from 'next/app'
import Layout from '../components/layout'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <AnimatePresence exitBeforeEnter>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AnimatePresence>  

  )
}