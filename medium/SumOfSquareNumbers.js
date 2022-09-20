// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

const judgeSquareSum = (c) => {
    if(c == 0) return true // if c = 0 it is a valid input
    let remainder // Remainder
    for(let i = 0; i < c ; i++) {
        remainder = c - (i**2) // subtract the i ^ 2 from the remainder, if the sqrt of remainder is an integer it is true
        if(Number.isInteger(Math.sqrt(remainder))) {
            return true
        }
        if(i * i > c) return false
    }
}