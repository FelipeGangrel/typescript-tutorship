const numbers = [1, 2, 3, 4, 5];
const names = ["Juan", "Pedro", "Ana", "Luis"];

type Person = {
  name: string;
  age: number;
};

const persons: Person[] = [
  { name: "Juan", age: 20 },
  { name: "Pedro", age: 30 },
  { name: "Ana", age: 25 },
  { name: "Luis", age: 40 },
];

/**
 * Reduce
 *
 * Executes a reducer function (that you provide) on each element of the array, resulting in a single output value
 */

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15

/**
 * To transform an array into a string
 */

const namesString = names.reduce((accumulator, currentValue, currentIndex) => {
  const isLastElement = currentIndex === names.length - 1;
  const separator = isLastElement ? "" : ", ";

  return accumulator + currentValue + separator;
}, "");

console.log(namesString); // Juan, Pedro, Ana, Luis

/**
 * To transform an array into an object where the keys are the names and the values are the ages
 */

const personsObject = persons.reduce((accumulator, currentValue) => {
  return {
    ...accumulator,
    [currentValue.name]: currentValue.age,
  };
});

console.log(personsObject); // { Juan: 20, Pedro: 30, Ana: 25, Luis: 40 }

/**
 * To transform an array of persons into an object with:
 * - lessThan30: persons names with age less than 30
 * - moreThan30: persons names with age equal or greater than 30
 */

type PersonCollection = {
  lessThan30: string[];
  moreThan30: string[];
};

const personCollection: PersonCollection = persons.reduce(
  (accumulator, currentValue) => {
    const key = currentValue.age >= 30 ? "moreThan30" : "lessThan30";

    const currentArray = accumulator[key];
    const newArray = [...currentArray, currentValue.name];

    return {
      ...accumulator,
      [key]: newArray,
    };
  },
  {
    lessThan30: [],
    moreThan30: [],
  }
);

console.log(personCollection);
