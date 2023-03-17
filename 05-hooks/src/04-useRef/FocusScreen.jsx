// useRef es similar a useState,
// pero cuando su valor cambia, no se vuelve a ejecutar la funcion

// Nos permite almacenar un valor mutable al cual puede acceder el componente
// similar a como acceden los class component a las propiedades que pertenecen a la instancia

// Retorna un objeto ref que persistira durante la vida del componente.
// Su propiedad current es inicializada con el initialValue: const obj = useRef(inititalValue)

// Al pasar un objeto ref al atributo ref de un componente de react, su propiedad .current se
//seteara con el correspondiente nodo del DOM cuando sea que este cambie.

import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  console.log(inputRef);

  const onClick = () => {
    // document.querySelector("input").select();
    console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mb-4"
        ref={inputRef}
      />
      <button onClick={onClick} className="btn btn-primary">
        Focus Input
      </button>
    </>
  );
};
