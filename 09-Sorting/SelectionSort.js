// Selection sort: selects the smallest element from an array
// and places that element at the beginning of the array.
// Runs in O(n^2) time
// Space Complexity: O(1)

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[indexOfMin] > arr[j]) {
                indexOfMin = j;
            }
        }
        // swap
        if (indexOfMin !== i) {
            let temp = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = temp;
        }
    }
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
selectionSort(numbers)
console.log(numbers)