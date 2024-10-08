import { getHeroById, getHeroesByOwner } from "../../bases/08-export-import";
import { DCHeroes, heroes } from "../../data/heroes";
import { Owners } from "../data/heroes";

describe("Test in base (08-export-import)", () => {
  test("should return a hero by id", () => {
    const id: number = 1;
    const hero = getHeroById(id);
    expect(hero).toEqual({ id: 1, name: DCHeroes.Batman, owner: Owners.DC });
  });

  test("should not return a hero by id if the hero does not exist (undefined)", () => {
    const id: number = 999;
    const hero = getHeroById(id);
    expect(hero).toBeFalsy();
  });

  test("should return heroes of DC", () => {
    const owner = Owners.DC;
    const heroesDc = getHeroesByOwner(owner);
    expect(heroesDc.length).toBe(3);
    expect(heroesDc).toEqual(
      heroes.filter((hero) => {
        hero.owner = owner;
      })
    );
  });

  test("should return heroes of Marvel", () => {
    const owner = Owners.Marvel;
    const heroesMr = getHeroesByOwner(owner);
    expect(heroesMr.length).toBe(2);
    expect(heroesMr).toEqual(
      heroes.filter((hero) => {
        hero.owner = owner;
      })
    );
  });
});
