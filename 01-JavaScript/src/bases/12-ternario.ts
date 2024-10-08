//!Operador ternario
//*Hacer una decision
const activo = true;

let msg = "";

if (activo) {
  msg = "Activo";
} else {
  msg = "Inactivo";
}

console.log(msg);

const msg2 = activo ? "Activo" : "Inactivo";
console.log(msg2);

//Corto
//!Solo mostrar si una condición se cumple , como un true
const mensaje = activo && "Activo";
console.log(mensaje);

//! Corto
const con = true;

con || console.log("La condición es verdadera.");
