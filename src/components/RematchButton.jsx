import React from "react";

const RematchButton = ({ clearAll }) => {
  return (
    <button
      onClick={clearAll}
      className="text-[14px] p-3 mt-5 font-bold rounded-md bg-gray-200 hover:cursor-pointer"
    >
      Rematch
    </button>
  );
};

export default RematchButton;
