import { Button, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

import styles from "./counter.module.css";

const MAX_NUM = 10;
const MIN_NUM = 0;
export const Counter = () => {
  const [count, setCounter] = useState(0);

  const handlePlus = () => {
    setCounter((prev) => Math.min(MAX_NUM, prev + 1));
  };

  const handleMinus = () => {
    setCounter((prev) => Math.max(MIN_NUM, prev - 1));
  };

  return (
    <Paper id="counter" elevation={10} className={styles.container}>
      <Typography>Counter number is {count}</Typography>
      <br />
      <Stack spacing={2}>
        <Button
          className={styles.button}
          disabled={count >= MAX_NUM}
          onClick={handlePlus}
          variant="contained"
        >
          +
        </Button>
        <Button
          className={styles.button}
          disabled={count <= MIN_NUM}
          onClick={handleMinus}
          variant="outlined"
        >
          -
        </Button>
      </Stack>
    </Paper>
  );
};
