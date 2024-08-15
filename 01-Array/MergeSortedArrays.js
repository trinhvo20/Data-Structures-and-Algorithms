/*
Merge two sorted arrays. Return a new sorted array.
*/ 

function mergeSortedArrays(arr1, arr2) {
    if (arr1.length === 0){
        return arr2;
    }
    if (arr2.length === 0){
        return arr1;
    }

    const result = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 0;
    let j = 0;

    while (arr1Item || arr2Item) {
        if (!arr2Item || arr1Item <= arr2Item){
            result.push(arr1Item);
            i++;
            arr1Item = arr1[i];
        } else {
            result.push(arr2Item);
            j++;
            arr2Item = arr2[j];
        }
    } 

    console.log(result);
    return result;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]) 
// [0, 3, 4, 4, 6, 30, 31]

mergeSortedArrays([0, 3, 8], [4, 6, 23, 30])