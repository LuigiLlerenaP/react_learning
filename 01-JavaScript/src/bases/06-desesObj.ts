// Desestructuración de objetos
// Asignación Desestructurante
interface SuperHero {
    alias: string;
    age: number;
    realName: string;
}

const ironMan: SuperHero = {
    alias: 'Iron Man',
    age: 45,
    realName: 'Tony Stark'
};

// Desestructuración de las propiedades del objeto 'ironMan'
const { alias, age, realName } = ironMan;


console.log(alias);
console.log(age);
console.log(realName);


const basicInfoSuperHero = ({ alias, age, realName }: SuperHero): string => {
    return `I'm ${alias}, I'm ${age} years old, and everyone knows me as ${realName}.`;
};

console.log(basicInfoSuperHero(ironMan));
console.log(basicInfoSuperHero({ alias: 'Spider-Man', age: 16, realName: 'Peter Parker' }));


interface SuperHeroLocation {
    lat: number;
    lng: number;
}

interface SuperHeroInfo {
    keyName: string;
    agePerson: number;
    latlng: SuperHeroLocation;
}

const usesContext = ({ age, realName }: SuperHero): SuperHeroInfo => {
    return {
        keyName: realName,
        agePerson: age,
        latlng: {
            lat: 14.13,
            lng: -23.33,
        }
    }
};

const { keyName, agePerson, latlng: { lat, lng } } = usesContext(ironMan);

console.log(keyName, agePerson);
console.log(lat, lng);
