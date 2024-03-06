var maxProfit = function(prices) {
    let profit = [0]
    for(let i = 1; i < prices.length; i++) {
        // basically this sets it up so you sell whenever the prev days stock is less, ending with a maximum profit in the end
        profit[i] = profit[i-1] + Math.max(prices[i] - prices[i-1], 0)
    }
    return profit[profit.length-1]
};
