
/**
 * 1. Create a function that returns the total amount (sum) of purchases
 * made by a user.
 *
 * the function must receive the user id and return the total amount
 */

import { purchases } from "../../challenges/data";

function getUserPurchasesSum(userId: number):number {
  const userPurchases = purchases.filter((purchase) => purchase.userId === userId)

  const totalSum = userPurchases.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount
  }, 0)
 
  console.log('sum', totalSum)
  console.log(userPurchases)

  return totalSum
}

getUserPurchasesSum(2)