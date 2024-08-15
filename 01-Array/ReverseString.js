/**
Reverse a string
*/
function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Please enter a valid string';
    }
    const backwards = [];
    const len = str.length - 1;
    for (let i = len; i >= 0; i--) {
        backwards.push(str[i]);
    }

    return backwards.join('');
}

// ===============================================================
function reverse2(str) {
    return str.split('').reverse().join('');
}

// ===============================================================
console.log(reverse2('hello world'));    // 'dlrow olleh'

