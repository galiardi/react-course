import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("testing 11-async-await", () => {
  test("getImagen debe retornar una url", async () => {
    const url = await getImagen();
    console.log(url);
    expect(url.includes("https://")).toBe(true);
  });
});
