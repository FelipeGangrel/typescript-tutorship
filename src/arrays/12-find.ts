const persons = [
  { name: "John", age: 21 },
  { name: "Peter", age: 31 },
  { name: "Mary", age: 42 },
];

/**
 * Find
 *
 * Returns the first element in the array that satisfies the provided testing function.
 */

const firstWithAgeGreaterThan30 = persons.find((person) => person.age > 30);

console.log(firstWithAgeGreaterThan30); // { name: "Peter", age: 31 }

const firstWithAgeGreaterThan50 = persons.find((person) => person.age > 50);

console.log(firstWithAgeGreaterThan50); // undefined

export {};
