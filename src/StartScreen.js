const StartScreen = ({setGameStatus, setNumberOfPlayers}) => {
  return (
    <div className="start-screen">
      <div className="text">Выберите количество игроков</div>
      <div className="start-screen__buttons">
        <button className="start-screen__button" onClick={()=>{
          setGameStatus('play')
          setNumberOfPlayers(2)
        }}>2</button>
        <button className="start-screen__button" onClick={()=>{
          setGameStatus('play')
          setNumberOfPlayers(3)
        }}>3</button>
        <button className="start-screen__button" onClick={()=>{
          setGameStatus('play')
          setNumberOfPlayers(4)
        }}>4</button>
      </div>
    </div>
  )
}

export default StartScreen