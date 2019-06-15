import React, { useRef } from "react";
import Row from "./Row";

function Grid({ size }) {
  const grid = useRef(Array.from(Array(size), (x, index) => index), [size]);
  console.log({ grid });
  return (
    <div>
      {grid.current.map(row => (
        <Row row={row} key={`row-${row}`} size={size} />
      ))}
    </div>
  );
}

export default Grid;
