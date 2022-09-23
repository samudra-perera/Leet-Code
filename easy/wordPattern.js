// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

//Turn into array
//make a map of an array that stores the index values
//iterate through the arrays with the key for the letter = to the word if not return false

const wordPattern = (pattern, s) => {
    const stringAsArray = s.split(" ");
    if(pattern.length !== stringAsArray.length) return false;
    const stringToPatternMap = {};
    const patternToStringMap = {};
    
    for(let i = 0 ; i < pattern.length ; i++){
      const patternChar = pattern[i];
      const str = stringAsArray[i];
      
      if(!(str in stringToPatternMap) && patternChar in patternToStringMap)
        return false;
      
      if(str in stringToPatternMap && stringToPatternMap[str] !== patternChar)
        return false;
      
      stringToPatternMap[str] = patternChar;
      patternToStringMap[patternChar] = str;
    }
    return true;
}

wordPattern("abba", "dog dog dog dog")