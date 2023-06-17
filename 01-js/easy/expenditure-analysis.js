/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const reducedArr = transactions.reduce((acc, curr) => {
    if (acc[curr.category]) {
      acc[curr.category] += curr.price;
    } else {
      acc[curr.category] = curr.price;
    }
    return acc;
  }, {});

  return Object.keys(reducedArr).map((key) => {
    const obj = {};
    obj.totalSpent = reducedArr[key];
    obj.category = key;
    return obj;
  });
}

module.exports = calculateTotalSpentByCategory;
