// /**
// Diberikan sebuah function yang menerima satu parameter berupa string. 
// Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang berjarak tetap 3 karakter lain (termasuk spasi). 
// Jika tidak ditemukan sama sekali, kembalikan nilai false.

// Contoh: 
// barbarian akan mengembalikan nilai true
// you are boring akan mengembalikan nilai true
// bacon sand meat akan mengembalikan nilai false

//  */ 

// function threeStepsAB(text) {
//     let counter = 0;

    
// }

// // Test Cases
// console.log(threeStepsAB("lane borrowed")); // true
// console.log(threeStepsAB("i am sick")); // false
// console.log(threeStepsAB("you are boring")); // true
// console.log(threeStepsAB("barbarian")); // true
// console.log(threeStepsAB("bacon and meat")); // false


function threeStepsAB(huruf) 
{
    // Ubah string menjadi lowercase untuk memperlakukan huruf a dan huruf b sebagai insensitive
    huruf = huruf.toLowerCase();

    // Loop melalui setiap karakter dalam string
    for (let i = 0; i < huruf.length; i++) 
    {
        if (huruf[i] === 'a') 
        {
            // Cari karakter huruf b yang berjarak 3 karakter lain (termasuk spasi) dari huruf
            for (let j = i + 1; j < huruf.length; j++) 
            {
                if (huruf[j] === 'b' && j - i === 4) 
                {
                    return true;
                }
            }
        }
    }

    // Jika tidak ditemukan pasangan huruf a dan b berjarak 3 yang sesuai
    return false;
}

// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false
