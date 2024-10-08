import "./index.css";

export const fullName: string = "Luigi Llerena";
console.log(`Hola soy ${fullName}`);

//!Variables
// No utilizar var , problema con hosting y scope
// * Const utilizar si el valor no cambia en tiempo de ejecución
const age: number = 24;
const nationality: string = "Ecuatoriano";

console.log(
  `Mi nombre es, ${fullName} y soy  ${nationality}  y mi edad es ${age}`
);

// * Utilizamos `let` cuando necesitamos cambiar el valor de la variable en tiempo de ejecución
let position: number = 0;
const add = (x: number, y: number): number => {
  return x + y;
};
position = add(2, 1);
console.log(`Tú estabas ${position}`);
position = add(2, 8);
console.log(`Tú posición es ${position}`);

//* Scope(Ámbito) podemos declarar dos variables iguales en diferentes scopes
const maxValue: number = 100;
const x: number = 50;
if (x < maxValue) {
  const x: number = 75;
  console.log("Dentro del bloque if, x es:", x);
}
console.log("Fuera del bloque if, x es:", x);
