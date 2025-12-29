// Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands.
// The array is virtually split into a sorted and an unsorted part. 
// Values from the unsorted part are picked and placed at the correct position in the sorted part.
// Runs in O(n^2) time
// Space Complexity: O(1)

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];    // shift value to the right
        }
        arr[j + 1] = currentVal;
    }
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
insertionSort(numbers)
console.log(numbers)

