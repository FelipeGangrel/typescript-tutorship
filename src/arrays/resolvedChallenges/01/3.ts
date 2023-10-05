/**
 * 3. Create a function that return the top 3 users who spent the most.
 *
 * the function must return an array of users ordered by the amount spent
 */

import { purchases, users } from "../../challenges/data";

function orderTheUsersBySpentAmount(){
  const usersArray = users.map(user =>  {
    // obtains users's purchases
    const userPurchases = purchases.filter(purchase => purchase.userId === user.id)
    // sums of all the user's purchases
    const totalAmount = userPurchases.reduce((acc, curr) => {
      return acc + curr.amount
    }, 0)

    return {  
      ...user,
      totalAmount // adds totalAmount as property in this object
    }
  })

  const orderedUsersByAmount = usersArray.sort((a,b) => b.totalAmount - a.totalAmount)

  const top3Users = orderedUsersByAmount.slice(0,3)

  return top3Users
}

console.log(orderTheUsersBySpentAmount())