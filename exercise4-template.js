// /**
// Diberikan satu buah input berupa array a.
// Dari semua kemungkinan subarray yang berasal dari a, subarray manakah yang akan memberikan jumlah/sum terbesar apabila semua anggota subarray tersebut dijumlahkan?

// Input:
// a = [-2, -3, 4, -1, -2, 1, 5, -3]

// Expected Output:
// [[ 4, -1, -2, 1, 5] , 7]

// Explanation:
// Diantara semua kemungkinan subarray, [ 4, -1, -2, 1, 5]  merupakan subarray yang akan memberikan jumlah terbesar

// Nilai 7  merupakan jumlah atau sum dari subarray  [ 4, -1, -2, 1, 5]
//  */

// function subArray(arr) {
//     // your code here
// }

// // Test Case
// let input = [-2, -3, 4, -1, -2, 1, 5, -3]
// console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]

function subArray(arr) {
    if (arr.length === 0) {
        return [[], 0];
    }

    let sumMax = arr[0];
    let currentSum = arr[0];
    let maxSubarray = [arr[0]];
    let currentSubarray = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (currentSum + arr[i] < arr[i]) {
            currentSum = arr[i];
            currentSubarray = [arr[i]];
        } else {
            currentSum += arr[i];
            currentSubarray.push(arr[i]);
        }

        if (currentSum > sumMax) {
            sumMax = currentSum;
            maxSubarray = [...currentSubarray];
        }
    }

    return [maxSubarray, sumMax];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // Output: [[4, -1, -2, 1, 5], 7]
