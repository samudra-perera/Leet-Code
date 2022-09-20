// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

const singleNumber = (nums) => {
    let map = {} //Create a map of all the instance of nums occuring. Then find the instance where the number occurs once
    let lens = nums.length
    for(let i = 0; i < lens; i++) {
        if(map[nums[i]]) {
            map[nums[i]]++
        } else {
            map[nums[i]] = 1
        }
    }
    
    for(let key in map) {
        if(map[key] == 1) return Number(key)
    }
}

//Time complexity is still o(n) two For loops


singleNumber([1,1,2,2,3,4,4,5,3])