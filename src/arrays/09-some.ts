export const numbers = [1, 2, 3, 4, 5];

/**
 * Some
 *
 * Returns true if at least one element in the array satisfies the provided testing function.
 */

const hasEvenNumber = numbers.some((number) => number % 2 === 0);

console.log(hasEvenNumber); // true

const hasOddNumber = numbers.some((number) => number % 2 !== 0);

console.log(hasOddNumber); // true

const hasNegativeNumber = numbers.some((number) => number < 0);

console.log(hasNegativeNumber); // false

export const persons = [
  { name: "John", age: 23 },
  { name: "Jane", age: 40 },
  { name: "Joe", age: 16 },
];

const hasMinor = persons.some((person) => person.age < 18);

console.log(hasMinor); // true
