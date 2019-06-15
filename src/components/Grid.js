import React, { useRef } from "react";
import Row from "./Row";

function Grid({ size }) {
  const grid = useRef(Array.from(Array(size), (x, index) => index + 1), [size]);

  return grid.map(row => <Row row={row} key={row} size={size} />);
}

export default Grid;
