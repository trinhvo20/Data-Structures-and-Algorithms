// Reverse a string using recursion

function reverse(str) {
    if (str === '') {
        return '';
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverse('hello'))  // 'olleh'
console.log(reverse('hello world'));    // 'dlrow olleh'