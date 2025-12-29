// Find Factorial of a number 'n': n! = 1 * 2 * 3 * ... * n

function factorialRec(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorialRec(n - 1);
}

function factorialIter(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// =========================================================================
// MAIN

console.log(factorialRec(5)); // 120
console.log(factorialIter(5)); // 120

