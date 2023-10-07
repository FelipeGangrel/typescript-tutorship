/**
 *
 * We want to be able to:
 *
 * Check the balance of the account
 * Deposit money into the account
 * Withdraw money from the account
 */

class BankAccount {
  protected balance: number;

  constructor(balance: number = 0) {
    this.balance = balance;
  }

  public getBalance(): number {
    return this.balance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public withdraw(amount: number): void {
    this.balance -= amount;
  }
}

const myAccount = new BankAccount(100);

// console.log(myAccount.balance); // Property 'balance' is private and only accessible within class 'BankAccount'

console.log(myAccount.getBalance()); // 100

myAccount.deposit(50);
console.log(myAccount.getBalance()); // 150

myAccount.withdraw(50);
console.log(myAccount.getBalance()); // 100

/**
 * All the public and protected members of the
 * parent class are accessible in the child class
 */
class InterAccount extends BankAccount {
  constructor(balance: number = 0) {
    super(balance);
  }
}

const myInterAccount = new InterAccount(100);

console.log(myInterAccount.getBalance()); // 100

myInterAccount.deposit(50);
console.log(myInterAccount.getBalance()); // 150

myInterAccount.withdraw(50);
console.log(myInterAccount.getBalance()); // 100
