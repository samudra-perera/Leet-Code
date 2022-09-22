/* Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not*/

// const isPalindrome = (x) => {
//    //Turn integer into a string 
//    //Then return if the reverse of the string is equal to the normal string
//    return x.toString().split('').reverse().join('') == x.toString()
// }

// Another solution 
const isPalindrome = (x) => {
    //Anything that is negative will return false
    if(x < 0) return false
    let numString = x.toString()
    let lens = numString.length
    let counter
    lens % 2 == 0 ? counter = lens/2 : counter = Math.floor(lens/2) // conditional statament for the odd length input since the middle value doesnt matter
    for(let i = 0; i < counter; i++) {
            let char = numString.charAt(lens - 1 - i)
            let char2 = numString.charAt(i)
            if(char !== char2) return false
        }
    return true
}

//
var isPalindrome2 = function(x) {
    // Base condition
    if (x < 0) {
        return false;
    }
    // Store the number in a variable
    let number = x;
    // This will store the reverse of the number
    let reverse = 0;
    while (number > 0) {
        reverse = reverse * 10 + number % 10;
        number = parseInt(number / 10);
    }
    return x === reverse;
};
