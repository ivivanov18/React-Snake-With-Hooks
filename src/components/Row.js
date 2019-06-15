import React, { useRef } from "react";
import Cell from "./Cell";

function Row({ row, size }) {
  const grid = useRef(Array.from(Array(size), (x, index) => index), [size]);

  return (
    <div className="grid-row">
      {grid.current.map(column => (
        <Cell row={row} column={column} key={column} size={size} />
      ))}
    </div>
  );
}

export default Row;
