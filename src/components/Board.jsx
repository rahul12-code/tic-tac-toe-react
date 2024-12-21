import React from "react";

const Board = ({ board, handleClick }) => {
  return (
    <div className="grid grid-cols-3 w-[300px] h-[270px] hover:cursor-pointer">
      {board.map((value, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className="w-[100px] h-[90px] text-[30px] font-bold border border-gray-500 overflow-hidden flex justify-center items-center hover:bg-gradient-to-br hover:from-gray-200 hover:to-white"
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default Board;
