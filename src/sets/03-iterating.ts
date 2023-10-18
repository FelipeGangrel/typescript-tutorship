/**
 * Iterating over sets
 */

const flavors = new Set(["chocolate", "vanilla", "strawberry"]);

/**
 * We can iterate over a set using the forEach() method.
 */

flavors.forEach((flavor) => {
  console.log(flavor);
});

/**
 * We can iterate over a set using the for...of loop.
 */

for (const flavor of flavors) {
  console.log(flavor);
}

/**
 * We can convert a set to an array using the spread operator.
 */

const flavorsArray = [...flavors];

console.log(flavorsArray); // [ 'chocolate', 'vanilla', 'strawberry' ]
