import { useState } from 'react'
import styles from './Game.module.css'

import GameOption from '../gameOption/GameOption'
let array = Array(9).fill(0)

function Game (){
  const [gameState, setGameState] = useState(Array(9).fill())

  console.log(gameState)
  return(
    <div className={styles.game}>
      {
        gameState.map((value, pos) => 
          <GameOption
            key={`game-option-pos-${pos}`}
            status={value}
          />
        )
      }      
    </div>
      
  )
}

export default Game