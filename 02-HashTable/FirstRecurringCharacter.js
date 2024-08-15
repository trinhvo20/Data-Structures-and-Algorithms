/*
Given an array of integers, find the first recurring character in it. 
Return the character which is recurring first.
*/

function firstRecurringCharacter(arr) {
    // O(N)
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            return arr[i];
        } else {
            map.set(arr[i], true);
        }
    }
    return undefined;
}

// MAIN

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// 2
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// 1
console.log(firstRecurringCharacter([2, 3, 4, 5]));
// undefined