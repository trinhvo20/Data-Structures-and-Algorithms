// Binary Search
// Time Complexity: O(log n)
// Space Complexity: O(1)

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (target == arr[middle]) {
            return true
        } else if (target < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return false;
}

// ================================== MAIN ==========================================

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 5)); // true
console.log(binarySearch(arr, 11)); // false