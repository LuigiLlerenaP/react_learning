enum DragonBallZCharacters {
  Goku = "Goku",
  Vegeta = "Vegeta",
  Gohan = "Gohan",
  Piccolo = "Piccolo",
  Krillin = "Krillin",
  Trunks = "Trunks",
  Bulma = "Bulma",
  Frieza = "Frieza",
  Cell = "Cell",
  MajinBuu = "Majin Buu",
  Android18 = "Android 18",
  Yamcha = "Yamcha",
  Tien = "Tien",
  Chiaotzu = "Chiaotzu",
  MasterRoshi = "Master Roshi",
  Hercule = "Hercule",
}
enum LevePowers {
  Top = "Top",
  High = "High",
  Mid = "Mid",
  Low = "Low",
}
interface PowerLevelMap {
  Top: DragonBallZCharacters[];
  High: DragonBallZCharacters[];
  Mid: DragonBallZCharacters[];
  Low: DragonBallZCharacters[];
}
type Level = LevePowers.Top | LevePowers.High | LevePowers.Mid | LevePowers.Low;

// Definimos tipos específicos para cada nivel de poder
type TopTier =
  | DragonBallZCharacters.Goku
  | DragonBallZCharacters.Vegeta
  | DragonBallZCharacters.Gohan
  | DragonBallZCharacters.MajinBuu;
type HighTier =
  | DragonBallZCharacters.Cell
  | DragonBallZCharacters.Frieza
  | DragonBallZCharacters.Trunks
  | DragonBallZCharacters.Piccolo;
type MidTier =
  | DragonBallZCharacters.Android18
  | DragonBallZCharacters.Tien
  | DragonBallZCharacters.Yamcha
  | DragonBallZCharacters.Krillin;
type LowTier =
  | DragonBallZCharacters.Chiaotzu
  | DragonBallZCharacters.MasterRoshi
  | DragonBallZCharacters.Hercule
  | DragonBallZCharacters.Bulma;

// Arrays de personajes con tipos específicos
const topTier: TopTier[] = [
  DragonBallZCharacters.Goku,
  DragonBallZCharacters.Vegeta,
  DragonBallZCharacters.Gohan,
  DragonBallZCharacters.MajinBuu,
];

const highTier: HighTier[] = [
  DragonBallZCharacters.Cell,
  DragonBallZCharacters.Frieza,
  DragonBallZCharacters.Trunks,
  DragonBallZCharacters.Piccolo,
];

const midTier: MidTier[] = [
  DragonBallZCharacters.Android18,
  DragonBallZCharacters.Tien,
  DragonBallZCharacters.Yamcha,
  DragonBallZCharacters.Krillin,
];

const lowTier: LowTier[] = [
  DragonBallZCharacters.Chiaotzu,
  DragonBallZCharacters.MasterRoshi,
  DragonBallZCharacters.Hercule,
  DragonBallZCharacters.Bulma,
];

//*Desestructuración de los arrays de personajes
const [goku, vegeta, gohan, majinBuu] = topTier;
console.log(goku, vegeta, gohan, majinBuu);
//*Podemos ignorar la posición dejando en blanco y con coma
const [, frieza] = highTier;
console.log(frieza);

//* withe conditional
const getCharacterByPowerLevel = (level: Level): DragonBallZCharacters[] => {
  let characterArray: DragonBallZCharacters[] = [];
  if (level === LevePowers.Top) {
    characterArray = [...topTier];
  }
  if (level === LevePowers.High) {
    characterArray = [...highTier];
  }
  if (level === LevePowers.Mid) {
    characterArray = [...midTier];
  }
  if (level === LevePowers.Low) {
    characterArray = [...lowTier];
  }
  return characterArray;
};

//*Object
const levelsMap: PowerLevelMap = {
  Top: topTier,
  High: highTier,
  Mid: midTier,
  Low: lowTier,
};
const getCharacterByPowerLevelTwo = (level: Level): DragonBallZCharacters[] => {
  return levelsMap[level];
};
//! Utilizamos la notación de corchetes con el objeto 'levelsMap' y la clave 'LevePowers.Low' para acceder al valor correspondiente
console.log(levelsMap[LevePowers.Low]);
//*IF
console.log(getCharacterByPowerLevel(LevePowers.High));
//*Object
console.log(getCharacterByPowerLevelTwo(LevePowers.High));

//*Desestructuración
const [android18, tien] = getCharacterByPowerLevel(LevePowers.Mid);
console.log(android18, tien);

//!Tarea
const uStateExample = (
  value: string
): [string, (newValue: string) => string] => {
  return [value, (newValue: string) => `Hola ${newValue}`];
};
const [nombre, setNombre] = uStateExample("Luigi");
console.log(nombre);
console.log(setNombre(nombre));

//!TEST
const returnArray = (): Array<string | number> => {
  return ["ABC", 123];
};

export { returnArray };
