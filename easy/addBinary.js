/*
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

const addBinary = (a, b) => {
  let sum = 0;
  //If the integers are not big integers
  if (a.length < 53 && b.length < 53) {
    //Parseint returns a integer with a base of 2 (binary) regular numbers are base 10
    sum = parseInt(a, 2) + parseInt(b, 2);
  } else {
    //need to add the '0b' in order to parse string into bigInt
    sum = BigInt("0b" + a) + BigInt("0b" + b);
  }
  return sum.toString(2);
};

//Time complexity is o(n) since parseInt and toString is a o(n) time complexity operation