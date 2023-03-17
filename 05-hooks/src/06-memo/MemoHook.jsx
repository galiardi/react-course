import { useState, useMemo } from "react";
import { useCounter } from "../custom-hooks/useCounter";

const heavyStuff = (iterationNumber) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("running heavy stuff");
  }
  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizedValue}</h4>

      <button onClick={() => increment(1)} className="btn btn-primary">
        +1
      </button>
      <button onClick={() => setShow(!show)} className="btn btn-primary">
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
