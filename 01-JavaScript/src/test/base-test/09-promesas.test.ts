import { getHeroByIdAsync } from "../../bases/09-promise";
import { DCHeroes, Owners } from "../../data/heroes";

describe("Tests in base (09-promises)", () => {
  test("should return a hero", (done) => {
    const id = 1;
    getHeroByIdAsync(id).then((hero) => {
      expect(hero).toEqual({ id: 1, name: DCHeroes.Batman, owner: Owners.DC });
      done();
    });
  });

  test("should return an error because the hero does not exist", (done) => {
    const id = 100;
    getHeroByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
        console.error(error);
        done();
      });
  });
});
