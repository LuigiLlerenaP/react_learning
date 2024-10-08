//!Template string
const firstName: string = "Luigi";
const lastName: string = "Llerena";

const fullName: string = `${firstName}  ${lastName}`;

console.log(`Your fullName is ${fullName}`);

const getGreet = (fullName: string): string => {
  return `Hello, ${fullName}`;
};

console.log(`Esto es un texto: ${getGreet(fullName)}`);

export { getGreet };
