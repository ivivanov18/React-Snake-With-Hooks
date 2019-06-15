import React from "react";

function Cell({ row, column, size }) {
  const cellClassName = ["grid-cell"];
  if (row === 0 || column === 0 || row === size - 1 || column === size - 1) {
    cellClassName.push("grid-cell-border");
  }
  return <div className={cellClassName.join(" ")} />;
}

export default Cell;
