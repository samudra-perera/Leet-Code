// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:
// #704
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

//Essentially want to cut the sort distance in half every iteration until the index cannot be cut in half anymore


const search = (nums, target) => {
    let lo = 0; 
    let hi = nums.length;
    do {
        const m = Math.floor(lo + (hi - lo)/ 2); //midpoint of the whole array
        const v = nums[m]; //value at midpoint      
        if(v === target) {
            return m
        } else if (v > target) { // if value at midpoint is greater than target, make the hi value m and calculate the new midpoint (m)
            hi = m;
        } else { // if value at midpoint is lower than target, make the lo value m + 1, since lo is inclusive of the search and calculate the new midpoint (m)
            lo = m + 1;
        }
        
    } while (lo < hi)
        
    return -1
}