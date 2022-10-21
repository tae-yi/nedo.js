/*es6/reduce.js */
const array1 = [1, 2, 3, 4];

// var sum = 0;
// for (var item of array1) sum = sum + item;

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);

console.log(sumWithInitial);
// expected output: 10

const sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x,
    initialValue
);

console.log(sum);
// expected output: 6