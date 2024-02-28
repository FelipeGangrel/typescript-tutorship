/**
 * 4. Create a function that returns an array of objects from the type
 * UserWithPurchases (see types/index.ts).
 */

import { purchases, users } from "../../challenges/data";
import { UserWithPurchases } from "../../challenges/types";

// 1 - catch purchases of each user 
// 2 - sum total of user's purchases
// 3 - returns array of object that contain each user, their purchases and totalAmmount

function getUsersWithPurchases():UserWithPurchases[]{
  const usersWithPurchases = users.map(user => {
    const userPurchases = purchases.filter(purchase => purchase.userId === user.id)
    const totalAmmount = userPurchases.reduce((acc, curr) => {
      return acc + curr.amount
    },0)

    return{
      ...user, 
      purchases: userPurchases,
      purchasesTotalAmount: totalAmmount,
    }
  })

  return usersWithPurchases
}


console.dir(getUsersWithPurchases(), { depth: null })