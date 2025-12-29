// Quick sort is a divide and conquer algorithm.
// It picks an element as PIVOT and partitions the given array
// such that all elements smaller than the pivot are on the left of the pivot
// and all elements greater than the pivot are on the right of the pivot.
// Runs in O(n log n) time
// Space Complexity: O(log n)

function quickSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1]; // Pick last element as pivot
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];

}   

// ======================= MAIN =========================
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const sortedArr = quickSort(numbers);
console.log(sortedArr)