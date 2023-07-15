import React from "react";
import classes from "./counter.module.scss";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  const incriment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className={classes.h1}>{count}</h1>
      <button className={classes.button} onClick={incriment}>
        INC
      </button>
    </div>
  );
}
