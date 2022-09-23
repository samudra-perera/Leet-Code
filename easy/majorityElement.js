// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?

//Create a map of all the elements
//Find the key that is the largest value and return 

var majorityElement2 = function(nums) {
    let map = {}    //Map
    let len = nums.length
    let result = nums[0]    //Let the result be the first elem
    if(len == 1) return result
    for(let i = 0; i < len; i++) {
        if(map[nums[i]]) {  //if elem exists in map add 1 to total then check if the total is greater than the current largest count
           map[nums[i]]++
           if(map[nums[i]] > map[result]) { //If the total in map is greater than the current greater total, let result be the current num
            result = nums[i]
           }
        } else {
            map[nums[i]] = 1
        }
    }
    return result   //return the largest
};

majorityElement([8,8,7,7,7])

// Another way using map // This solution was 45ms faster than the previous and it is also O(n) speed
const majorityElement = (nums) => {
    let map = {}    //Map
    let len = nums.length
    let result
    let largest = 0
    if(len == 1) return nums[0]
    for(let i = 0; i < len; i++) {
        if(map[nums[i]]) {  //if elem exists in map add 1 to total then check if the total is greater than the current largest count
           map[nums[i]]++
        } else {
            map[nums[i]] = 1
        }
    }

    for (keys in map) {
        if(map[keys] > largest) {
            largest = map[keys]
            result = keys
        }
    }
    return result
}