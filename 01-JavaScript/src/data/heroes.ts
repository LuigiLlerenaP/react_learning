export enum Owners {
  DC = "DC",
  Marvel = "Marvel",
}

export enum MarvelHeroes {
  SpiderMan = "Spider-Man",
  IronMan = "Iron Man",
  CaptainAmerica = "Captain America",
  Hulk = "Hulk",
  Thor = "Thor",
  BlackWidow = "Black Widow",
  DoctorStrange = "Doctor Strange",
  BlackPanther = "Black Panther",
  Wolverine = "Wolverine",
  Deadpool = "Deadpool",
}

export enum DCHeroes {
  Batman = "Batman",
  Superman = "Superman",
  WonderWoman = "Wonder Woman",
  TheFlash = "The Flash",
  Aquaman = "Aquaman",
  GreenLantern = "Green Lantern",
  MartianManhunter = "Martian Manhunter",
  Shazam = "Shazam",
  GreenArrow = "Green Arrow",
  Cyborg = "Cyborg",
}

type MarvelHero = MarvelHeroes;
type DCHero = DCHeroes;
export type HeroName = MarvelHero | DCHero;
export type OwnerType = Owners.DC | Owners.Marvel;

export interface Hero {
  id: number;
  name: HeroName;
  owner: OwnerType;
}

export const heroes: Hero[] = [
  { id: 1, name: DCHeroes.Batman, owner: Owners.DC },
  { id: 2, name: MarvelHeroes.SpiderMan, owner: Owners.Marvel },
  { id: 3, name: DCHeroes.Superman, owner: Owners.DC },
  { id: 4, name: DCHeroes.TheFlash, owner: Owners.DC },
  { id: 5, name: MarvelHeroes.Wolverine, owner: Owners.Marvel },
];

//!Si hacemos una exportación por defecto no lleva nombre mi arreglo
//*El nombre se lo da cuando lo importemos
// export default [
//   {
//     id: 6,
//     name: DCHeroes.Shazam,
//     owner: Owners.DC,
//   },
//   {
//     id: 7,
//     name: MarvelHeroes.Hulk,
//     owner: Owners.Marvel,
//   },
// ];
const heroesMarvel: Hero[] = [
  { id: 8, name: MarvelHeroes.Thor, owner: Owners.Marvel },
  { id: 9, name: MarvelHeroes.DoctorStrange, owner: Owners.Marvel },
];
//!También podemos exportar por defecto al final dándole el nombre de que exportaremos
//export default heroesMarvel;

// Si realizamos una exportación por defecto (export default heroesMarvel):
// Tenemos que importar normalmente. Si es una exportación normal, será con Desestructuración de un objeto.
// Ejemplo de importación:
// import heroesMarvel, { Hero } from "./data/heroes";
// También podemos exportar un objeto
// y con as default  podemos declarar si no usamos  al principio
export default { heroesMarvel };
