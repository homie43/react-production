import React from "react";
import classes from "./counter.module.scss";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  const incriment = () => {
    setCount(count + 1);
  };

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.h1}>{count}</h1>
      <button className={classes.btn} onClick={incriment}>
        INC
      </button>
    </div>
  );
}
