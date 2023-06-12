/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length===0){
        return 0;
    }
    let i=0;
    let j=0;
    while(i<nums.length){
        if(nums[i] !== val){
            nums[j]=nums[i];
            j++;
        }
        i++;
    }
    return j;
};