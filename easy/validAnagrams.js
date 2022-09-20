// Split string and then re-order them in alpha order and rejoin, if the strings are equal then it is a palindrom

var isAnagram2 = function(s, t) {
    return s.split('').sort().join('') == t.split('').sort().join('') //One line solution using JS methods
};

//USing a hashmap 
const isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    s.split(''), t.split('') // Turn strings into arrays
    let countS = {} //Storage for the map
    let countT = {} //Storage for the map
    let len = s.length
    for(let i = 0; i < len; i++) {
        //General logic for the map is, if the element exists within the map add 1 to the total, if it does not exist set its total to 1
        if(countS[s[i]]) {
            countS[s[i]]++
        } else {
            countS[s[i]] = 1
        }

        if(countT[t[i]]) {
            countT[t[i]]++
        } else {
            countT[t[i]] = 1
        }
    }
    //Check if all the elements that exist in S exist in T since they are ordered alpha by default
    for (let i in countS) {
        if (countS[i] !== countT[i]) return false
    }

    return true
}

isAnagram("anagram", "nagaram")