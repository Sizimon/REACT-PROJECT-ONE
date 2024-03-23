const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const {row, cell} = square;

        gameBoard[row][cell] = player;
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, cellIndex) => ( 
                        <li key={cellIndex}>
                            <button 
                            onClick={() => onSelectSquare(rowIndex, cellIndex)} 
                            disabled={playerSymbol !== null}
                            >
                                {playerSymbol}
                            </button>
                        </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}