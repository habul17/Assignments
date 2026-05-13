/*
1. Sum values in object arrays

    - Input:
        
        { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
        
        
    - Output:

        { food: 60, travel: 20, bills: 100 }


*/


const budget = {
    food: [10, 20, 30],
    travel: [5, 15],
    bills: [40, 60]
};

function sumObjArr(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

const result = {};

for (const key in budget) {
    result[key] = sumObjArr(budget[key]);
}

console.log(result);

