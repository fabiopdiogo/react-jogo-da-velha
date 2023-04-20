import GamePage from '../src/components/gamePage/GamePage'

import Head from 'next/head'

function HomePage () {
  
  return (
    <div>
      <Head>
        <title>Jogo da Velha - Fabio Diogo</title> 
       </Head>
      <GamePage />
    </div>
  )
}

export default HomePage