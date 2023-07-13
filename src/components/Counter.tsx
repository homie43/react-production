import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  const incriment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incriment}>INC</button>
    </div>
  );
}
