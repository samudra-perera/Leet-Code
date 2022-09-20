// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Constraints:

// // 1 <= digits.length <= 100
// // 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

// const plusOne = (digits) => {
//     //Turn array into strings then concat 
//     //and then turn into a number add one
//     //Turn back into a string, split and turn into a number
//     return (Number(digits.join('')) + 1)//.toString().split('').map(elem => Number(elem))
// }

// plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3,2])

// This solution does not work with large integers

const plusOne = (digits) => {
    let len = digits.length - 1
    for(let i = len; i >= 0; i--) {
        if(digits[i] < 9) { // If the last digit is not a 9 , add one and return the array
            digits[i] += 1
            return digits
        } else {
            digits[i] = 0
        }
    }
    digits.unshift(1) // If that for loop finishes and it does not return digits, add 1 to the beginning of the array array is all 9 
    return digits
}