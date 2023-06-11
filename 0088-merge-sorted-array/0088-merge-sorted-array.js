/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let first=m-1;
    let second=n-1;
    let ith=m+n-1;
    
   while(second>=0){
        let firstval=nums1[first];
        let secondval=nums2[second];
        if(firstval>secondval){
            nums1[ith]=firstval;
            ith--;
            first--;
        }else{
            nums1[ith]=secondval;
            ith--;
            second--;
        }
    }
};