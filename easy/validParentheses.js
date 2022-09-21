// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const isValid = (s) => {
    //Create a map of the parentheses and then remove them as they appear, if the string is empty at the end return true
    const map = {'(':')','[':']', '{':'}'}
    const stack = []
    for(let bracket of s) {
        if(map[bracket]) { //Checks to see if bracket is an opening bracket (key in map)
            stack.push(map[bracket]) //Pushes closing bracket to the stack
        } else if(stack.length > 0 && stack[stack.length - 1] == bracket) { //If a close bracket -> stack length > 0 and the last elemnt equals a close bracket of the same type remove from end
            stack.pop()
        } else {
            return false
        }
    }

    return stack.length == 0
}

isValid('(())({)}')
