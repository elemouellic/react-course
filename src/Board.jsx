import Cell from './Cell.jsx';
import './Board.css';

// eslint-disable-next-line react/prop-types
function Board({ squares, onClick }) {
function renderSquare(i) {
  let className = "cell";
  if (squares[i] === 'X') {
    className += " cell-X";
  } else if (squares[i] === 'O') {
    className += " cell-O";
  }
  return <Cell value={squares[i]} className={className} onClick={() => onClick(i)} />;
}

  return (
      <div className="board-row-wrapper">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
  );
}

export default Board;