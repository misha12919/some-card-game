import { useState } from "react"
import StartScreen from "./StartScreen"
import PlayScreen from "./PlayScreen"

function App() {
  const [gameStatus, setGameStatus] = useState('start')
  const [numberOfPlayers, setNumberOfPlayers] = useState(3)

  if (gameStatus === 'start') {
    return (
      <StartScreen setGameStatus={setGameStatus} setNumberOfPlayers={setNumberOfPlayers} />
    )
  } else if (gameStatus === 'play') {
    return (
      <PlayScreen numberOfPlayers={numberOfPlayers} />
    )
  }
}

export default App;
