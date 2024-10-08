//!Object literal
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    city: string;
    zip: number;
    lat: number;
    lng: number;
}

const person: Person = {
    firstName: 'Luigi',
    lastName: 'Llerena',
    age: 23,
    address: {
        city: 'Quito',
        zip: 12345,
        lat: 40.7128,
        lng: -74.0060
    }
};

console.log({ person });

//!Solo estamos copiando la referencia , y los cambios se reflejan en el objeto original
const person2:Person = person;
console.log(person2);
console.log(person2.firstName='Juan');
//!Utilizamos el operador spreed para hacer un clon o extraer los datos
const person3:Person  ={...person};
console.log(person3);
console.log(person3.firstName='Tony');

console.log({ person });//Juan
console.log(person2);//juan
console.log(person3); //Si modifica su objeto