// Given a index N, return the value at that index in the Fibonacci sequence, where the sequence is: 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597...

function fibonacciRec(n) {
    // O(2^N)
    if (n <= 1) {
        return n;
    }
    return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}

function fibonacciIter(n) {
    // O(N)
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        let temp = a;
        a = b;
        b = temp + b;   
    }

    return a;
}


// =============================================================================
// MAIN

console.log(fibonacciRec(5)); // 5
console.log(fibonacciRec(6)); // 8
console.log(fibonacciRec(0)); // 0

console.log(fibonacciIter(5)); // 5
console.log(fibonacciIter(6)); // 8
console.log(fibonacciIter(0)); // 0
console.log(fibonacciIter(1)); // 1
