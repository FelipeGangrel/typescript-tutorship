/**
 * Every function defines a new scope
 */

const name = "John";

function doSomething() {
  // we can name variables using names that are already defined in the outer scope
  const name = "Jane";
  return name;
}

console.log(doSomething()); // Jane

function doSomethingElse() {
  // we can also access variables from the outer scope
  return name;
}

console.log(doSomethingElse()); // John

// We can define a now scope by using curly braces
{
  const name = "Mike";
  console.log(name); // Mike
}

export {};
