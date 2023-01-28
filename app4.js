// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

// for loop
let forSum = 0;
for (let i = 1; i <= 100; i++) {
    forSum += i;
}
console.log(forSum);

//while loop
let whileSum = 0;
let i = 1;
while (i <= 100) {
    whileSum += i;
    i++;
}
console.log(whileSum);
