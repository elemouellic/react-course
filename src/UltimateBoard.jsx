import Board from './Board.jsx';
import './UltimateBoard.css';
import {useState} from "react";

function UltimateBoard() {
    const [squares, setSquares] = useState(Array(9).fill(Array(9).fill(null)));
    const [xIsNext, setXIsNext] = useState(true);

    const resetGame = () => {
    setSquares(Array(9).fill(Array(9).fill(null)));
    setXIsNext(true);
};

const handleClick = (boardIndex, i) => {
    const squaresCopy = squares.slice();
    if (calculateWinner(squaresCopy[boardIndex]) || squaresCopy[boardIndex][i]) {
        return;
    }
    squaresCopy[boardIndex] = squaresCopy[boardIndex].slice(); // copy inner array
    squaresCopy[boardIndex][i] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);

    const winner = calculateWinner(squaresCopy[boardIndex]);
    if (winner) {
        squaresCopy[boardIndex] = Array(9).fill(winner);
        setSquares(squaresCopy);
    }

    const ultimateWinner = calculateUltimateWinner(squaresCopy);
    if (ultimateWinner) {
        if (ultimateWinner === 'Draw') {
            alert('Le jeu est une égalité!');
        } else {
            alert(ultimateWinner + ' a gagné le jeu ultime!');
        }
        // Réinitialiser le jeu
        resetGame();
    }
};

    const renderBoard = (i) => {
        return <Board squares={squares[i]} onClick={(index) => handleClick(i, index)} />;
    };

    return (
        <div className="game-board">
            {Array(9).fill(null).map((_, i) => (
                <div key={i} className="ultimate-board-row">
                    {renderBoard(i)}
                </div>
            ))}
            <button className="btn" onClick={resetGame}>Reset Game</button>

        </div>

    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    // Si aucun joueur n'a gagné, vérifiez s'il reste des cases vides
    const isBoardFull = squares.every(square => square !== null);

    // Si le tableau est plein et qu'aucun joueur n'a gagné, alors c'est une égalité
    if (isBoardFull) {
        return 'Draw';
    }

    // Si aucun joueur n'a gagné et qu'il reste des cases vides, alors le jeu continue
    return null;
}

function calculateUltimateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        const aWin = calculateWinner(squares[a]);
        const bWin = calculateWinner(squares[b]);
        const cWin = calculateWinner(squares[c]);
        if (aWin && aWin === bWin && aWin === cWin) {
            return aWin;
        }
    }

    // Si aucun joueur n'a gagné, vérifiez s'il reste des cases vides
    const isBoardFull = squares.every(square => calculateWinner(square) !== null);

    // Si le tableau est plein et qu'aucun joueur n'a gagné, alors c'est une égalité
    if (isBoardFull) {
        return 'Draw';
    }

    return null;
}
export default UltimateBoard;