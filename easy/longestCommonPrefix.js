// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

const longestCommonPrefix = (str) => {
    if (str.length === 0) return '';

    //Set to the first word of the array
    let prefix = str[0];
    for (let i = 0; i < str.length; i++) {
        while(str[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }
    return prefix
}