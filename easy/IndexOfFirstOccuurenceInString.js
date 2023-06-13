// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

//this solution does not work for a single usecase
const strStr2 = (haystack, needle) => {
    //Loop through haystack till first letter is there 
    //initialize counter
    //if counter = length of needle, return with index
    let counter = 0;
    console.log(needle[0])

    for(let i =  0; i < haystack.length; i++) {
        if(haystack[i] === needle[counter]) {
            counter++
            if(counter == needle.length) return i + 1 - counter
        } else if (haystack[i] === needle[0]) {
            counter = 1
        } else {
            counter = 0
        }
        console.log({"counter": counter, "i": i, "boolean": counter == needle.length, "value": haystack[i]})
    }
    return -1
}

// strStr('butsad', 'sad')
// strStr("leetcode", 'leeto')
strStr2("mississippi", "issip")

const strStr = (haystack, needle) => {
    if (haystack === needle || needle === "") return 0

    //if the letter in haystack matches up with the first letter in needle 
    //Then create a substring of haystack and compare with needle
    for (let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[0]) {
            let sub = haystack.substring(i, i+needle.length)
            if(sub === needle) {
                return i
            }
        }
    }
    return -1
}

//This solution also return the correct anwer
// const strStr = (haystack, needle) => {
//     return haystack.indexOf(needle)
// }