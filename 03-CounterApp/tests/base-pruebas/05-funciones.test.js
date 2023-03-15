import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("testimg 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const user = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    expect(getUser()).toEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = "Pablo";
    expect(getUsuarioActivo(name)).toEqual({ uid: "ABC567", username: name });
  });
});
