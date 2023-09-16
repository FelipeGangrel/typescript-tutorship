type User = {
  role: "admin" | "client";
  name: string;
};

const users: User[] = [
  {
    name: "Juan",
    role: "admin",
  },
  {
    name: "Pedro",
    role: "client",
  },
  {
    name: "Ana",
    role: "client",
  },
  {
    name: "Luis",
    role: "admin",
  },
];

/**
 * Filter
 *
 * Returns the elements of an array that meet the condition specified in a callback function
 */

const admins = users.filter((user) => user.role === "admin");

console.log(admins); // [{ name: 'Juan', role: 'admin' }, { name: 'Luis', role: 'admin' }]

const clients = users.filter((user) => user.role === "client");

console.log(clients); // [{ name: 'Pedro', role: 'client' }, { name: 'Ana', role: 'client' }]

/**
 * To get the first two users
 *
 * The second parameter of the callback function is the index of the current element being processed in the array
 *
 * We named the first parameter as _user because we are not using it
 */
const firstTwoUsers = users.filter((_user, index) => index < 2);

console.log(firstTwoUsers); // [{ name: 'Juan', role: 'admin' }, { name: 'Pedro', role: 'client' }]

export {};
