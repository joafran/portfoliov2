import Head from 'next/head'
import styles from './layout.module.css'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout( { children }: LayoutProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Joaquin Franco Web Developer Portfolio"
        />
         <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="og:title" content='Joaquin Franco' />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet"></link>
        <title>Joaquin Franco</title>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
    </div>
  )
}