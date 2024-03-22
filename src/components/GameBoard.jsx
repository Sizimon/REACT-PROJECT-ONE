import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, cellIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][cellIndex] = 'X';
            return updatedBoard;
        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, cellIndex) => ( 
                        <li key={cellIndex}>
                            <button onClick={() => handleSelectSquare(rowIndex, cellIndex)}>{playerSymbol}</button>
                        </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}