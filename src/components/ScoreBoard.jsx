import React from "react";

const ScoreBoard = ({ XWins, OWins, Draws }) => {
  return (
    <div className="flex gap-6 mb-4 font-bold text-[20px]">
      <div className="flex flex-col justify-center items-center">
        <div>X</div>
        <div>{XWins} Wins</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>O</div>
        <div>{OWins} Wins</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>=</div>
        <div>{Draws} Draws</div>
      </div>
    </div>
  );
};

export default ScoreBoard;
