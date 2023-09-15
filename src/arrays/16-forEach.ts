const items = ["chocolate", "vanilla", "strawberry", "vanilla"];

/**
 * For Each
 *
 * Calls a function for each element in the array.
 *
 * The function receives the following arguments:
 *
 * - The value of the element
 * - The index of the element
 * - The array being traversed
 */

// logging the value of each item
items.forEach((item) => {
  console.log(`Item: ${item}`);
});

// logging the value and index of each item
items.forEach((item, index) => {
  console.log(`Item: ${item}, Index: ${index}`);
});

// logging the value, index, and the array of each item
items.forEach((item, index, array) => {
  console.log(`Item: ${item}, Index: ${index}`, "Array: ", array);
});

// logging the value of each item but if the item is "vanilla", no next item is logged
items.forEach((item) => {
  if (item === "vanilla") {
    return;
  }

  console.log(`Item: ${item}`);
});

export {};
