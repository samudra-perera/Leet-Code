/* 
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
*/

// const rotateString = (s, goal) => {
//     //if the lengths aren't equal return false
//     if (s.length !== goal.length) return false

//     //concat s with itself and check if the substring goal exists within the new string s
//     s = s + s
//     return s.includes(goal)
// }

const rotateString = (s, goal) => {
    if (s.length !== goal.length) return false

    return s.concat(s).includes(goal)
    
}