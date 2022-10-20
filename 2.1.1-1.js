if (true) {
    var x = 3;
}
console.log(x);// 3

if (true) {
    const y = 3;
    console.log(y);
}
// console.log(y); // Uncaught ReferenceError;

if (true) {
    let z = 3;
    console.log(z);
}
// console.log(z); // Uncaught ReferenceError;
