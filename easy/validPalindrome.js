/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.*/

const isPalindrome = (s) => {
    //Clean the string by getting rid of all the non letter inputs
    //Case Sensitive? Make same case
    // Check if the clean string is == to itself in reverse
    let alpha = '0123456789abcdefghijklmnopqrstuvwxyz'
    let clean = s.toLowerCase().split('').filter(elem => alpha.includes(elem))
    return clean.join('') == clean.reverse().join('')
}

isPalindrome("0P")