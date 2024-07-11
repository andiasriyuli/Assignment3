// /**
//   Diberikan function yang menerima 2 parameter, yaitu :
//     parameter 1: array of integer (unsorted) 
//     parameter 2: integer. 
//   Function tersebut akan mengembalikan array 2 dimensi.
//   Masing-masing dimensi array terdiri 2 angka yang jika dijumlahkan mempunyai nilai yang sama dengan parameter 2.
//  */

// function sumArray(arr, int) {
//     // your code here
// }

// // Test Cases
// console.log(sumArray([2, 1, 4, 3], 5)); // [[2, 3], [1, 4]]
// console.log(sumArray([1, 8, 10, 3], 11)); // [[1, 10], [8, 3]]
// console.log(sumArray([1, -1, 2, -2, 3, -3], 0)); // [[1, -1], [2, -2], [3, -3]]
// console.log(sumArray([1, 1, 1, 1], 2)); // [[1, 1], [1, 1], [1, 1]]
// console.log(sumArray([1, 2, 3, 4, 5], 10)); // []


function sumArray(arr, jumlah) {
arr.sort((a, b) => a - b);

let result = [];
let left = 0;
let right = arr.length - 1;

while (left < right) 
  {
    let jumlahNow = arr[left] + arr[right];

    if (jumlahNow === jumlah) 
      {
        result.push([arr[left], arr[right]]);
        left++;
        right--;
      } 
      else if (jumlahNow < jumlah) 
        {
        left++;
        } 
        else 
        {
        right--;
        }
  }

return result;
}

// // Test Cases
console.log(sumArray([2, 1, 4, 3], 5)); // [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // [[1, 10], [8, 3]]
console.log(sumArray([1, -1, 2, -2, 3, -3], 0)); // [[1, -1], [2, -2], [3, -3]]
console.log(sumArray([1, 1, 1, 1], 2)); // [[1, 1], [1, 1], [1, 1]]
console.log(sumArray([1, 2, 3, 4, 5], 10)); // []
