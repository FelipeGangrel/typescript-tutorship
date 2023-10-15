/**
 * Iterating through Maps
 */

const quiz = new Map();

quiz.set("question", "What is Superman's real name?");
quiz.set("alternatives", ["Clark Kent", "Arthur Curry", "Bruce Wayne"]);
quiz.set("correct", 0);

/**
 * We can iterate through a map using the for...of loop.
 *
 * The for...of loop iterates through the keys of the map.
 */

for (const [key, value] of quiz) {
  console.log(`${key}: ${value}`);
}

/**
 * We can iterate through the keys of a map using the keys() method.
 */

for (const key of quiz.keys()) {
  console.log(key);
}

/**
 * We can iterate through the values of a map using the values() method.
 */

for (const value of quiz.values()) {
  console.log(value);
}

/**
 * We can iterate through the entries of a map using the entries() method.
 */

for (const [key, value] of quiz.entries()) {
  console.log(`${key}: ${value}`);
}

/**
 * We can iterate through the entries of a map using the forEach() method.
 */

quiz.forEach((value, key) => console.log(`${key}: ${value}`));

export {};
