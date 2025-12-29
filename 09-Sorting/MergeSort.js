// Merge sort is a divide and conquer algorithm. 
// It divides the input array into two halves and calls itself for the two halves 
// and then calls merge() to merge the two halves.
// Runs in O(n log n) time
// Space Complexity: O(n)

function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr  // base case
    }

    // Divide the array into halves
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)   
    const right = arr.slice(middle)

    // Recursively call mergeSort and merge the two halves
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// =========================== MAIN ===========================
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const sortedArr = mergeSort(numbers);
console.log(sortedArr)