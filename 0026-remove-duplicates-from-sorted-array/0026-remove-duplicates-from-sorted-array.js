/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   if(nums.length===0){
       return 0;
   }
    let i=0;
    let j=0;
    while(i<nums.length){
        if(nums[i] !==nums[i+1]){
            nums[j]=nums[i];
            j++;
        }
        i++
    }
    return j;
};