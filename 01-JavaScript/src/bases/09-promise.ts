//! Promesas
//// Las promesas se ejecutarán una vez que se haya completado el código síncrono.
//*then :Se ejecuta cuando la promesa se cumple exitosamente
//*catch :Se ejecuta si la promesa es rechazada debido a un error
//*final :Se ejecuta siempre, sin importar si la promesa se cumple o se rechaza.

import { getHeroById } from "./08-export-import";

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(getHeroById(2));
//     reject("It is not possible to find the hero");
//   }, 2222);
// });

// promise
//   .then((hero) => {
//     console.log(`Your hero is ${hero}`);
//   })
//   .catch((err) => console.log(err));

const getHeroByIdAsync = (id: number): Promise<string | undefined> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero: string | undefined = getHeroById(id);
      if (!hero) {
        reject(
          new Error(`It is not possible to find the hero with this id ${id}`)
        );
      }
      resolve(hero);
    }, 1000);
  });
};

// getHeroByIdAsync(633)
//   .then((hero) => {
//     console.log(`Your hero is ${hero}`);
//   })
//   .catch(console.warn);

export { getHeroByIdAsync };
