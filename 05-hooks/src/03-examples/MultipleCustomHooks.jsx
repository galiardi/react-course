import { useCounter, useFetch } from "../custom-hooks";
import { Loading, Quote } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, error } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  const { name, species } = !!data && data;

  // const {a} = false 
  // console.log('a', a)
    
  return (
    <>
      <div className="title">
        <h1 className="mb-5">Multiple Custom Hooks</h1>
        {isLoading && <Loading />}
      </div>
      <hr />

      {error && (
        <div className="alert alert-danger text-center">{error.message}</div>
      )}

      {data && <Quote quote={species} author={name} />}

      <button
        onClick={() => decrement(1, 1)}
        className="btn btn-primary"
        disabled={isLoading}
      >
        Prev quote
      </button>
      <button
        onClick={() => increment(1)}
        className="btn btn-primary"
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
