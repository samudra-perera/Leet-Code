//509
const fib = (n) => {
    //Start with 0 n = 1
    //Start with +1 n = 2
    // fib = 2 n = 3
    //fib = 4 n = 4
    let [prev, cur] = [0, 1]
    let counter = 1
    //While loop starts from fib = 1
    while(counter < n) {
        let newCur = prev + cur;
        prev = cur
        cur = newCur
        counter++
    }
    return n == 0 ? prev : cur
} // This solution is o(n) time complexity and o(n) space complexity // 

const fib2 = (n) => {
    let result = [0,1]
    for(let i = 2; i <= n; i++) {
        result[i] = result[i-1] + result[i-2]
    }
    return n == 0 ? 0 : result[result.length - 1]
}

// The while loop solution had better performance (faster than 95% of submission) compared to the for loop(faster than 35%)