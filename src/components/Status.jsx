import React from "react";

const Status = ({ winner }) => {
  return (
    <h2 className="text-[20px] mb-4 font-bold">
      Status: {winner ? `Winner ${winner}` : "Playing"}
    </h2>
  );
};

export default Status;
