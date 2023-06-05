/* 
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/

// simple solution (trivial approach)
// const sortedSquares = (nums) => {
//     let square = nums.map(number => number ** 2)
//     return square.sort((a,b) =>  a-b)
// }

//Optimal solution
// o(n)
const sortedSquares = (nums) => {
    //Create array same size are numss
  let result = new Array(nums.length).fill(0);
  //Left Pointer at beginning of array
  let left = 0;
  //Right pointer at end of array
  let right = nums.length - 1;
  //Index of the result
  let resultIndex = nums.length - 1;

  while (left <= right) {
    //Square each value
    let leftVal = nums[left] ** 2;
    let rightVal = nums[right] ** 2;

    //If right pointer value greater than left pointer value then set the result at resultindex to the right value and decreement pointers 
    if (leftVal < rightVal) {
      result[resultIndex] = rightVal;
      right--;
    } else {
      result[resultIndex] = leftVal;
      left++;
    }
    resultIndex--;
  }
  return result
};
