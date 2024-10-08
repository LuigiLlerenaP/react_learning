//! Import , export , funciones
//! imp
//! Como importar
//
import heroesMarvel, {
  Hero,
  heroes,
  HeroName,
  Owners,
  OwnerType,
} from "../data/heroes";

console.log(heroes); // Imprime el arreglo completo de héroes

const hasId = (id: number): boolean => {
  for (let i = 0; i < heroes.length; i++) {
    if (heroes[i].id === id) return true;
  }
  return false;
};
const getHeroById = (id: number): HeroName | undefined | string => {
  if (!hasId(id)) return;
  for (let index = 0; index < heroes.length; index++) {
    if (heroes[index].id === id) {
      return heroes[index].name;
    }
  }
};

const hasIdTwo = (id: number): boolean => {
  //Método some para verificar si existe en el arreglo
  return heroes.some((hero) => hero.id === id);
};
const getHeroByIdTwo = (id: number): HeroName | undefined | string => {
  if (!hasIdTwo(id)) return;
  //Método find para buscar un héroe por su ID
  const hero: Hero | undefined = heroes.find((hero) => hero.id === id);
  return hero?.name;
};

console.log(getHeroByIdTwo(2));
console.log(getHeroById(4));

// !Owner
const getHeroesByOwner = (owner: OwnerType) => {
  const filteredHeroes: Hero[] = [];
  for (let index = 0; index < heroes.length; index++) {
    if (heroes[index].owner === owner) {
      filteredHeroes.push(heroes[index]);
    }
  }
  return filteredHeroes;
};

console.log(getHeroesByOwner(Owners.DC));

const getHeroesByOwnerTwo = (owner: OwnerType): Hero[] => {
  return heroes.filter((hero) => hero.owner === owner);
};

console.log(getHeroesByOwnerTwo(Owners.DC));

heroesMarvel;

export { getHeroById, getHeroesByOwner };
