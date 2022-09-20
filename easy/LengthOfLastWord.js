// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.


// The idea is to split the string by the spaces
// Then filter out any elements that are equal to a empty space (case of when the space between is more than 1 space)
// Then return the last element of the clean array tand find its length
const lengthOfLastWord = (s) => {
    let clean = s.split(' ').filter(elem => elem !== '')
    return clean[clean.length - 1].length
}

//This is O(n) time due to filter method

lengthOfLastWord("   fly me   to   the moon  ")