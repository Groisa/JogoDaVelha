import { useEffect, useState } from "react";
import { BoardStyled, CellStyled, ContaninerStyled } from "./assets/styled";
import './App.css'
import { toast } from "react-toastify";

function App() {
  const emptData = Array(9).fill('')
  const [board, setBoard] = useState(emptData)
  const [currentPlay, setCurrentPlay] = useState('X')
  const [winner, setWinner] = useState('')
  const handleClickBoard = (index: number) => {
    if (winner !== '') {
      toast.error('Jogo Acabou')
      return null
    }
    if (board[index] !== '') {
      toast.error('Posição já preenchida')
      return null
    }
    setBoard(board.map((item, indexItem) => indexItem === index ? currentPlay : item))
    setCurrentPlay(currentPlay === 'X' ? 'O' : 'X')
  }
  const checkWinner = () => {
    const possitionWinner = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
      [board[2], board[4], board[6]],
      [board[0], board[4], board[8]],
    ]
    possitionWinner.forEach(cells => {
      if (cells.every(cell => cell === 'O')) setWinner('O')
      if (cells.every(cell => cell === 'X')) setWinner('X')
    })
    checkDraw()
  }
  const resetGame = () => {
    if (winner !== 'E') {
      setCurrentPlay(winner)
    }
    setWinner('')
    setBoard(emptData)
  }
  const checkDraw = () => {
    if (board.every(item => item !== '')) {
      setWinner('E')
    }
  }

  useEffect(() => {
    if (winner === 'X') {
      toast.success('X Venceu')
    }
    if (winner === 'O') {
      toast.success('O Venceu')
    }
    if (winner === 'E') {
      toast.warning('O jogo empatou!')
    }
  }, [winner])
  useEffect(checkWinner, [board])
  return (
    <ContaninerStyled>
      <h1>Jogo da Velha</h1>
      {winner !== '' ? (
        <>
          {winner === 'O' &&
            <h2> O Venceu!</h2>}
          {winner === 'X' &&
            <h2> X Venceu!</h2>}
          {winner === 'E' &&
            <h2> O jogo empatou!</h2>}
          <BoardStyled className={winner !== '' ? 'gamerOver' : ''}>
            {board.map((item, index) => (
              <CellStyled
                key={index}
                className={item}
                onClick={() => handleClickBoard(index)}
              >{item}</CellStyled>
            ))}
          </BoardStyled>
          <button onClick={resetGame}>Reiniciar Jogo</button>
        </>
      ) : (
        <BoardStyled className={winner !== '' ? 'gamerOver' : ''}>
          {board.map((item, index) => (
            <CellStyled
              key={index}
              className={item}
              onClick={() => handleClickBoard(index)}
            >{item}</CellStyled>
          ))}
        </BoardStyled>
      )}
    </ContaninerStyled>
  );
}

export default App;
