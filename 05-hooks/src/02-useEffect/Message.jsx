import { useEffect } from "react";

export const Message = () => {
  const onMouseMove = ({ x, y }) => {
    console.log(x, y);
  };

  useEffect(() => {
    console.log("Message mounted");
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      console.log("Message unmounted");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return <h1>Usuario ya existe</h1>;
};
