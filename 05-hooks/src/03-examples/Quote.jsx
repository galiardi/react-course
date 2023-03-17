import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ quote, author }) => {
  const [boxSize, setBoxSize] = useState({ height: 0, width: 0 });

  const pRef = useRef();

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-right" style={{ display: "flex" }}>
        <p className="mb-2" ref={pRef}>
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <p>{JSON.stringify(boxSize)}</p>
    </>
  );
};
