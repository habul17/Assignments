/*
2. Count word occurance in array

    - Input:
        
        ["apple", "banana", "apple", "orange", "banana", "apple"]
        
        
    - Output:

        { apple: 3, banana: 2, orange: 1 }


*/


const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const result = {};

for (let i = 0; i < fruits.length; i++) {
    const word = fruits[i];

    if (result[word]) {
        result[word]++;
    } else {
        result[word] = 1;
    }
}

console.log(result);