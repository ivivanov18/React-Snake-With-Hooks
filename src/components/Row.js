import React, { useRef } from "react";
import Cell from "./Cell";

function Row({ row, size }) {
  const grid = useRef(Array.from(Array(size), (x, index) => index + 1), [size]);

  return grid.map(column => <Cell row={row} column={column} key={column} />);
}

export default Row;
