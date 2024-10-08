//!Arrays
//Son colecciones de datos que se encuentran en una misma variable.

//! Podemos crear un array con una longitud específica usando el constructor Array.
const arrays = new Array(2);
console.log(arrays);

//!Podemos crear un array usando solo []
const fruits:string[] = ['pera'];
fruits.push('manzana')
//*No es recomendable usar push por que modifica el arreglo original


//! Podemos usar el operador spread para modificar un arreglo existente
//* Esto ayuda a cuidar la mutabilidad, creando un nuevo arreglo en lugar de modificar el original.
const fruits2:string[]=[...fruits,'uva'];
console.log(fruits2);

//!Podemos recorrer un arreglo usando for o funciones de javasCript
for(let i: number= 0 ; i<fruits2.length;i++){
  console.log(`La fruta es: ${fruits2[i]}`);
}
//!Map espera una función un callback
fruits2.map(f => console.log(f));

//Map crea un nuevo arreglo con la modificación
const numbers :number[]= [1,2,3,4,5];
const numbers2:number[]=numbers.map(n=>n*2);
console.log(numbers2);
