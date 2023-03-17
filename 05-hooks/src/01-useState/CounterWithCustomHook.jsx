import { useCounter } from "../custom-hooks/useCounter";

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(0);

  const logEvent = (e) => {
    console.log(e);
  };

  return (
    <>
      <h1>Counter With Custom Hook</h1>
      <h1>{counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +
      </button>
      <button className="btn btn-primary" onClick={reset}>
        reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(10)}>
        -
      </button>
      <button onClick={logEvent}>log event</button>
      <button className="btn btn-primary"></button>
    </>
  );
};

export default CounterWithCustomHook;
