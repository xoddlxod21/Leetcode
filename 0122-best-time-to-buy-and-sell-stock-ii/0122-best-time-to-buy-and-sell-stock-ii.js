/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxVal=0;
    for (let i=1; i<prices.length;i++){
      if (prices[i] > prices[i-1]){
          maxVal+=prices[i]-prices[i-1];
      }
  }
    return maxVal;
};