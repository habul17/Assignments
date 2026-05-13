/*
3. Swap keys and values of object

    - Input:
        
        { a: "x", b: "y", c: "z" }
        
        
    - Output:

        { x: "a", y: "b", z: "c" }


*/

const obj = {
    a : "x",
    b : "y",
    c : "z"
}

result = {};

for ( const key in obj) {
    const value = obj[key];

    result[value] = key;
}

console.log(result);