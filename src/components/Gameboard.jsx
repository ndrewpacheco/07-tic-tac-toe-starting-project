const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({ onSelectSquare, turns }) {

  let gameboard = initialGameboard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, playerSymbolIndex) => (
              <li key={playerSymbolIndex}>
                <button onClick={() => onSelectSquare(rowIndex, playerSymbolIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
