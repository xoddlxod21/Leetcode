/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority=nums[0];
    let votes=1;
    for(let i=1; i<nums.length; i++ ){
        if (majority===nums[i]){
            votes++;
        }else if(votes===0){
            majority=nums[i];
            votes++
        }else{
            votes--;
        }
    }
    return majority;
};