import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("testing 06-deses-obj", () => {
  test("usContext debe retornar un objeto", () => {
    const clave = "pablo";
    const edad = 40;
    const obj = {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };
    expect(usContext({ clave, edad })).toEqual(obj);
  });
});
