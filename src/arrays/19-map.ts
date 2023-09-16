type Person = {
  name: string;
  birthday: Date;
};

const people: Person[] = [
  {
    name: "Juan",
    birthday: new Date("1990-01-01"),
  },
  {
    name: "Pedro",
    birthday: new Date("1995-01-01"),
  },
  {
    name: "Ana",
    birthday: new Date("1992-01-01"),
  },
  {
    name: "Luis",
    birthday: new Date("1991-01-01"),
  },
];

/**
 * Map
 *
 * Transforms the elements of an array applying a function to each one
 */

const names = people.map((person) => person.name);

console.log(names); // ["Juan", "Pedro", "Ana", "Luis"]

type PersonWithAge = Person & {
  age: number;
};

const personsWithAge: PersonWithAge[] = people.map((person) => {
  const age = new Date().getFullYear() - person.birthday.getFullYear();

  return {
    ...person,
    age,
  };
});

console.log(personsWithAge);

export {};
