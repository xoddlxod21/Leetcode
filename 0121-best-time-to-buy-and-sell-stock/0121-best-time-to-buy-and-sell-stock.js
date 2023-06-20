/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let maxProfit= 0;
    for(let i=1; i<prices.length; i++){
        if(prices[i]<buyPrice){
            buyPrice=prices[i];
        }else{
            let currentProfit =prices[i]-buyPrice;
            maxProfit=Math.max(currentProfit, maxProfit);
        }
    }
    return maxProfit;
};