// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each element in nums appears exactly three times except for one element which appears once.

//First create map
//Then check for value in map that has a value of 1 then return that key

// const singleNumber = (nums) => {
//     let map = {};
//     let lens = nums.length
//     for(let i = 0; i < lens; i++) {
//         if(map[nums[i]]) {
//             map[nums[i]]++
//         } else {
//             map[nums[i]] = 1
//         }
//     }

//     for( keys in map) {
//         if(map[keys] == 1) {
//             return Number(keys)
//         }
//     }
// }

var singleNumber = function(nums) { //Using bitwise operators
    let singles = 0;
    let doubles = 0;

    for (num of nums) {
        // Add to singles if it's not in doubles. Also remove from singles if it's in there
        singles = (~doubles) & (singles ^ num); //Bitwise & operator returns a 1 in each positoin where the bit of both (~doubles) & (singles ^ num) are the sane
        // Add to doubles if it's not in singles. Also remove from doubles if it's in there
        doubles = (~singles) & (doubles ^ num);
    }

    return singles;
};

singleNumber([0,1,0,1,0,1,99])