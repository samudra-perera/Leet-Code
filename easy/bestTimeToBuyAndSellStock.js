//121
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// const maxProfit = (prices) => {
//     let profit = 0
//     for(let i = 0; i < prices.length - 1; i++) {
//         for(let j = i+1; j < prices.length; j++) {
//             let tempProfit = prices[j] - prices[i]
//             if(tempProfit > profit) {
//                 profit = tempProfit
//             }
//         }
//     }
//     return profit
// } This is the brute force solution Time complexity is o(n^2)

const maxProfit = (prices) => {
    let profit = 0               //Init profit with profit var
    let buyPrice = prices[0]    //Holds the current buy value
    for(let i = 0; i < prices.length-1; i++) {  //Iterate through the array
        let tempProfit = prices[i+1] - prices[i]    //if index+1 subtract the current index 
        if(tempProfit > 0) {                        //if tempProfit is greater than 0 that means that the prices[index+1] is larger than prices[index] meaning if you buy at prices
            if(prices[i] < buyPrice) {              //meaning if you buy at prices[index] and sell at prices[index+1] you will make a profit
                buyPrice = prices[i]                //check if the price[index] is less than the current buy price, if it is, make the new buy price the current index
            }

            if(prices[i+1] - buyPrice > profit) {  //after reassigning the new buyPrice check if the profit made is greater than the prev profit
                profit = prices[i+1] - buyPrice     //make profit the next index subtract the current buyPrice
            }
        }
    }
    return profit
} 


