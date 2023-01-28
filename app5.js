// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

// for loop
let forProduct = 1;
for (let i = 1; i <= 12; i++) {
    forProduct *= i;
}
console.log(forProduct);


// while loop
let whileProduct = 1;
let i = 1;
while (i <= 12) {
    whileProduct *= i;
    i++;
}
console.log(whileProduct);
