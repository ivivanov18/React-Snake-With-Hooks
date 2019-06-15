import React, { useState } from "react";
import Grid from "./Grid";

const GRID_SIZE = 35;

function Main() {
  const [snake, setSnake] = useState({ row: 10, column: 20 });
  const [snack, setSnack] = useState({ row: 10, column: 25 });

  return (
    <div className="app">
      <Grid size={GRID_SIZE} />;
    </div>
  );
}

export default Main;
