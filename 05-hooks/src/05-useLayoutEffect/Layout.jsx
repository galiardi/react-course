import { useCounter, useFetch } from "../custom-hooks";
import { Loading, Quote } from "../03-examples/index";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, error } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  console.log({ data, isLoading, error });

  const { author, quote } = !!data && data[0];

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

      {data && <Quote quote={quote} author={author} />}

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
