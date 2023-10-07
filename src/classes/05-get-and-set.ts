class Person {
  public firstName: string;
  public lastName: string;
  private _age: number;

  constructor(firstName: string, lastName: string, age: number = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._age = age;
  }

  // We can access this method as a property
  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public set age(age: number) {
    if (age < 0) {
      throw new Error("Age must be a positive number");
    }
    this._age = age;
  }

  public get age(): number {
    return this._age;
  }
}

const person = new Person("John", "Doe", 30);

console.log(person.firstName); // John
console.log(person.lastName); // Doe
console.log(person.fullName); // John Doe
console.log(person.age); // 30 (by accessing the getter method)

person.age = 31; // (by accessing the setter method)
console.log(person.age); // 31 (by accessing the getter method)

try {
  person.age = -1; // Error: Age must be a positive number
} catch (error: any) {
  console.log(error?.message); // Age must be a positive number
}

export {};
