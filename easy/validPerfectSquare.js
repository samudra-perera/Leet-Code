 const isPerfectSquare = function(num) {
    for(let i = 0; i <= num; i++) {
        if(i * i == num) return true
        if(i * i > num) return false
    }
};

//O(n) 
//For loop and multiply counters, if two happen to equal num return true else return false