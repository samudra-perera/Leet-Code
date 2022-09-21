// #344
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

// const reverseString = (s) => {
//     return s.reverse()
// }

const reverseString = (s) => {
    let left = 0;
    let right = s.length - 1;

    while( left <= right ) { // Middle index does not need to change for odd length strings
        [s[left],s[right]] = [s[right],s[left]] // Swap pointers 
        left++;
        right--;
    }
    return s
}

reverseString(["h","e","l","l","o"])