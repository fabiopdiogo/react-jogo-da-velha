import '../src/style.css'
import Head from 'next/head'

function App ({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Jogo da Velha - Fabio Diogo</title>
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default App