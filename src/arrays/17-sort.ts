const numbers = [5, 3, 2, 4, 1];
const names = ["Carina", "Bianca", "Alice", "Daniel", "Eduardo"];

type Person = {
  name: string;
  age: number;
};

const persons: Person[] = [
  {
    name: "Carina",
    age: 32,
  },
  {
    name: "Bianca",
    age: 29,
  },
  {
    name: "Alice",
    age: 1,
  },
  {
    name: "Daniel",
    age: 36,
  },
  {
    name: "Eduardo",
    age: 3,
  },
];

/**
 * Sort
 *
 * Sorts the elements of an array in place and returns the array.
 *
 * Beware that the sort method sorts the array in place, meaning that it changes the original array.
 */

/**
 * To sort the numbers in ascending order:
 *
 * we need to pass a function to the sort method that compares two numbers.
 *
 * If the function returns a negative number, the first number is sorted before the second number.
 * If the function returns a positive number, the second number is sorted before the first number.
 * If the function returns 0, the order of the numbers is unchanged.
 */
const sortedNumbers = [...numbers].sort((a, b) => a - b);

console.log(sortedNumbers); // [1, 2, 3, 4, 5]

/**
 * To sort the numbers in descending order:
 *
 * We need to invert the logic of the function that compares two numbers.
 */
const reverseSortedNumbers = [...numbers].sort((a, b) => b - a);

console.log(reverseSortedNumbers); // [5, 4, 3, 2, 1]

/**
 * To sort an array of strings in alphabetical order:
 *
 * We need to pass a function to the sort method that compares two strings.
 */
const sortedNames = [...names].sort((a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
});

console.log(sortedNames); // ["Alice", "Bianca", "Carina", "Daniel", "Eduardo"]

/**
 * To sort an array of strings in a safe way:
 *
 * We can use the localeCompare method of the String object.
 */
const safeSortedNames = [...names].sort((a, b) => a.localeCompare(b));

console.log(safeSortedNames); // ["Alice", "Bianca", "Carina", "Daniel", "Eduardo"]

/**
 * To sort an array of objects by age in ascending order:
 */
const sortedPersonsByAge = [...persons].sort((a, b) => a.age - b.age);

console.log(sortedPersonsByAge);

/**
 * To sort an array of objects by age in descending order:
 */
const reverseSortedPersonsByAge = [...persons].sort((a, b) => b.age - a.age);

console.log(reverseSortedPersonsByAge);

/**
 * To sort an array of objects by name in alphabetical order:
 */
const sortedPersonsByName = [...persons].sort((a, b) =>
  a.name.localeCompare(b.name)
);

console.log(sortedPersonsByName);

/**
 * To sort an array of objects by name in descending alphabetical order:
 */
const reverseSortedPersonsByName = [...persons].sort((a, b) =>
  b.name.localeCompare(a.name)
);

console.log(reverseSortedPersonsByName);

/**
 * To sort an array of objects by name in alphabetical order and by age in ascending order:
 */

const personsCopy: Person[] = persons.concat([
  {
    name: "Carina",
    age: 26,
  },
  {
    name: "Alice",
    age: 56,
  },
]);

const sortedPersonsByNameAndAge = [...personsCopy].sort((a, b) => {
  const nameComparison = a.name.localeCompare(b.name);

  // we will only compare the age if the names are equal
  if (nameComparison === 0) {
    return a.age - b.age;
  }

  return nameComparison;
});

console.log(sortedPersonsByNameAndAge);

export {};
