// Bubble Sort is the simplest sorting algorithm that works by 
// repeatedly swapping the adjacent elements if they are in wrong order.
// Runs in O(n^2) time
// Space Complexity: O(1)

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
bubbleSort(numbers)
console.log(numbers)