//!Functions
//!Function tradicional , hay problemas con reasignar el valor de la función
function greet(firstName: string): string {
  return `Hola, ${firstName}`;
}

console.log(greet("Luigi"));

//!Arrow function
//*El código no se ejecuta si se reasigna el valor de mi función
const greetTwo = (firstName: string, lastName: string): string => {
  return `Hola, ${firstName} ${lastName}`;
};

console.log(greetTwo("Luigi", "Llerena"));

//!Si solo tenemos una linea podemos quitar el return
const sumTwoNumbers = (a: number, b: number): number => a + b;
console.log(sumTwoNumbers(2, 3));

//Si voy a retornar un objeto lo puedo poner con () sin {}
export interface user {
  uid: string;
  userName: string;
}
const getUser = (): user => ({ uid: "ASD3343", userName: "Luigi" });
console.log(getUser());

//T
const getUserActive = (fullName: string): user => ({
  uid: "ASD3343",
  userName: fullName,
});

console.log(getUserActive("Tony Ll"));

const userActive = getUserActive("Tony Ll");

console.log(userActive);

export { greet, getUser, getUserActive };
