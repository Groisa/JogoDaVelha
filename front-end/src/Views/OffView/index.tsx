import { useEffect, useState } from "react";
import { BoardStyled, ButtonStyled, CellStyled, ContaninerStyled, PlacarStyled, PlacaStyledO, PlacaStyledX } from "../../assets/styled";
import '../../Global.css'
import { toast } from "react-toastify";

export function OffView() {
    const emptData = Array(9).fill('')
    const [board, setBoard] = useState(emptData)
    const [currentPlay, setCurrentPlay] = useState('X')
    const [winner, setWinner] = useState('')
    const [counterX, setConterX] = useState(0)
    const [counterO, setConterO] = useState(0)
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
    const resetPlacar = () => {
        if (winner !== 'E') {
            setCurrentPlay(winner)
        }
        setWinner('')
        setBoard(emptData)
        setConterO(0)
        setConterX(0)
    }
    const checkDraw = () => {
        if (board.every(item => item !== '')) {
            setWinner('E')
        }
    }

    useEffect(() => {
        if (winner === 'X') {
            toast.success('X Venceu')
            setConterX(counterX + 1)
        }
        if (winner === 'O') {
            toast.success('O Venceu')
            setConterO(counterO + 1)
        }
        if (winner === 'E') {
            toast.warning('O jogo empatou!')
        }
    }, [winner])
    useEffect(checkWinner, [board])
    return (
        <ContaninerStyled>
            <h1 className="pt-5">Jogo da Velha</h1>
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
                    <PlacarStyled>
                        {counterO === 0 && counterX !== 0 &&
                            <PlacaStyledO>
                                <p>O</p>
                                {counterO}
                            </PlacaStyledO>
                        }
                        {counterX === 0 && counterO !== 0 &&
                            <PlacaStyledX>
                                <p>X</p>
                                {counterX}
                            </PlacaStyledX>
                        }
                        {counterX !== 0 &&
                            <PlacaStyledX>
                                <>
                                    <p>X</p>
                                    {counterX}
                                </>
                            </PlacaStyledX>
                        }
                        {counterO !== 0 &&
                            <PlacaStyledO>
                                <p>O</p>
                                {counterO}
                            </PlacaStyledO>
                        }

                    </PlacarStyled>
                    <button onClick={resetGame}>Reiniciar Jogo</button>
                    <button onClick={resetPlacar}>Reiniciar Placar</button>
                    <ButtonStyled onClick={() => window.history.back()}>Sair</ButtonStyled>

                </>
            ) : (
                <>
                    <BoardStyled className={winner !== '' ? 'gamerOver' : ''}>
                        {board.map((item, index) => (
                            <CellStyled
                                key={index}
                                className={item}
                                onClick={() => handleClickBoard(index)}
                            >{item}</CellStyled>
                        ))}
                    </BoardStyled>
                    <PlacarStyled>
                        {counterO === 0 && counterX !== 0 &&
                            <PlacaStyledO>
                                <p>O</p>
                                {counterO}
                            </PlacaStyledO>
                        }
                        {counterX === 0 && counterO !== 0 &&
                            <PlacaStyledX>
                                <p>X</p>
                                {counterX}
                            </PlacaStyledX>
                        }
                        {counterX !== 0 &&
                            <PlacaStyledX>
                                <>
                                    <p>X</p>
                                    {counterX}
                                </>
                            </PlacaStyledX>
                        }
                        {counterO !== 0 &&
                            <PlacaStyledO>
                                <p>O</p>
                                {counterO}
                            </PlacaStyledO>
                        }

                    </PlacarStyled>
                    <ButtonStyled onClick={() => window.history.back()}>Sair</ButtonStyled>
                </>
            )}
        </ContaninerStyled>
    )
}