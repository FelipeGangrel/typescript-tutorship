/**
 * Class inheritance
 */

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
}

class User extends Person {
  email: string;

  constructor(name: string, age: number, email: string) {
    /**
     * First, we need to call the constructor of the parent class and
     * pass the required parameters
     */
    super(name, age);
    // Then, we can initialize the properties of the child class
    this.email = email;
  }
}

const user = new User("John", 30, "john@example.com");

/**
 * Checking the type of an instance
 */

console.log(user instanceof User); // true
console.log(user instanceof Person); // true (because User extends Person)

/**
 * We can also extend the User class to create a new class
 */
class Admin extends User {
  role: string;

  constructor(name: string, age: number, email: string, role: string) {
    super(name, age, email);
    this.role = role;
  }
}

const admin = new Admin("Jane", 35, "john@example.com", "admin");

console.log(admin instanceof Admin); // true
console.log(admin instanceof User); // true (because Admin extends User)
console.log(admin instanceof Person); // true (because User extends Person)

export {};
