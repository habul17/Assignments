/*
3. Find the largest value key
    - Input:
        
        { a: 10, b: 50, c: 20 }
        
        
    - Output:

        b

*/

const value = {
    a: 10,
    b: 50,
    c: 20
};

let largest = -Infinity;
let largestKey = "";

for (const key in value) {
    if (value[key] > largest) {
        largest = value[key];
        largestKey = key;
    }
}

console.log(largestKey);