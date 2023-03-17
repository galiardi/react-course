import { useCallback } from "react";
import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(0);
  const increment = useCallback((value = 1) => {
    setCounter((c) => c + value);
  }, []);
  return (
    <>
      <h1>Callback hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
