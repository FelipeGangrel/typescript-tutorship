export const numbers = [1, 2, 3, 4, 5];

/**
 * Every
 *
 * Returns true if all elements in the array satisfies the provided testing function.
 */

const hasOnlyEvenNumbers = numbers.every((number) => number % 2 === 0);

console.log(hasOnlyEvenNumbers); // false

const hasOnlyPositiveNumbers = numbers.every((number) => number > 0);

console.log(hasOnlyPositiveNumbers); // true

export const persons = [
  { name: "John", age: 23 },
  { name: "Jane", age: 40 },
  { name: "Joe", age: 16 },
];

const areAllAdults = persons.every((person) => person.age >= 18);

console.log(areAllAdults); // false
