// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

 const mySqrt = (x) => {
    if(x <= 1) {
        return x
    }

    for(let i = 2; i <=x; i++) {
        if(i * i == x) return i
        if(i * i > x) return i -1
    }
 }

 //If x <= 1 return xß
 //Loop from i to x and find if any 2 values will equal x
 //if equal return x , if greater than x return counter -1 