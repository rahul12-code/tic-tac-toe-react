import React, { useState } from "react";
import Status from "./Status";
import ScoreBoard from "./ScoreBoard";
import Board from "./Board";
import RematchButton from "./RematchButton";

const TicTacToe = () => {
  let [board, setBoard] = useState(Array(9).fill(null)); // Array to track individual box states
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [XWins, setXWins] = useState(0);
  const [OWins, setOWins] = useState(0);
  const [Draws, setDraws] = useState(0);

  const findingWinner = (board) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6], // Diagonals
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(`Winner:${board[a]}`);
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const updatedBoard = [...board];
    updatedBoard[index] = isXTurn ? "X" : "O";

    setBoard(updatedBoard);
    setIsXTurn(!isXTurn);

    const gameWinner = findingWinner(updatedBoard);
    if (gameWinner) {
        setWinner(gameWinner);
        if (gameWinner === "X") {
          setXWins((prevXWins) => prevXWins + 1);
        } else {
          setOWins((prevOWins) => prevOWins + 1);
        }
    } else if (!updatedBoard.includes(null)) {
          setDraws((prevDraws) => prevDraws + 1);
    }
  };
  console.log(board);

  const clearAll = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true); // Reset turn to X
    setWinner(null);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Status winner={winner} />
      <ScoreBoard XWins={XWins} OWins={OWins} Draws={Draws} />
      <Board board={board} handleClick={handleClick} />
      <RematchButton clearAll={clearAll} />
    </div>
  );
};

export default TicTacToe;
