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
    let profit = 0
    let buyPrice = prices[0]
    for(let i = 0; i < prices.length-1; i++) {
        let tempProfit = prices[i+1] - prices[i]
        if(tempProfit > 0) {
            if(prices[i] < buyPrice) {
                buyPrice = prices[i]
            }
            
            if(prices[i+1] - buyPrice > profit) {
                profit = prices[i+1] - buyPrice
            }
        }
        
    }
    return profit
} 



