import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Testing 08-imp-exp", () => {
  test("getHeroeById debe retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe retornar undefined si no existe id", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBe(undefined);
  });

  test("getHeroByOwner debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroesDC = getHeroesByOwner(owner);

    expect(heroesDC.length).toBe(3);
    expect(heroesDC).toEqual(heroes.filter((hero) => hero.owner === owner));
  });

  test("getHeroByOwner debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroesMarvel = getHeroesByOwner(owner);

    expect(heroesMarvel.length).toBe(2);
    expect(heroesMarvel).toEqual(heroes.filter((hero) => hero.owner === owner));
  });
});
