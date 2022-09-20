// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// const twoSum = (nums, target) => {
//     //I want to subtract a number from the target and see if that subtract value exists in the array, it it exists I want to return the indexes
//     // To reduce mem decalre lendgth 
//     //Since we know there will always be a solution no need to return a empty array if it does not exist
//     // Input validition?
//     let len = nums.length
//     let find // this is the value we want to find
//     for(let i = 0; i < len; i++) {
//         find = target - nums[i]
//         console.log(target - find)
//         if(find == (target - find)) break
//         if(nums.indexOf(find)) return [i, nums.indexOf(find)] // this does not work if the inputs are the same value
//     }

//     let indexArr = [];
//     for (let j = 0; j < len; j++) {
//         if(find == nums[j]) indexArr.push(j)
//     }
//     return indexArr
// }

// twoSum([3,2,4], 6)

const twoSum2 = (nums, target) => {
    //I want to subtract a number from the target and see if that subtract value exists in the array, it it exists I want to return the indexes
    let len = nums.length
    let find 
    for(let i = 0; i < len; i++) {
        find = target - nums[i]
        for(let j = i + 1; j < len; j++) {
            if(nums[j] == find) return [i, j]
        }
    }
}

// This solution is a bit better than brute force, but still O(n**2) time


const twoSum = (num, target) => {
    let map = new Map() // Create a new map
    let len = num.length // For memory
    let num1, num2
    for(let i = 0; i < len; i++) { 
        num1 = num[i]
        num2 = target - num1 // This is the value we want to check if it exists in the map
        if(map.has(num2)) {
            return [i, map.get(num2)] // Since order does not matter map works well
        }
        map.set(num1, i)
    }
}

twoSum([1,2,3,5,5], 10)
//This solution is O(n) time complexity and O(n) space complexity as well