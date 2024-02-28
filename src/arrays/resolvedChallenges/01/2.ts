/**
 * 2. Create a function that returns the total amount (sum) of purchases
 * made by all users.
 *
 * the function must return the total amount
 */

import { purchases } from "../../challenges/data";

function getAllPurchasesSum(){
  const totalSum = purchases.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount
  }, 0)

  console.log(totalSum)
}

getAllPurchasesSum()