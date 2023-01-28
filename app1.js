// Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.

// As a for loop
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log("for: " + i);
    }
}

// As a while loop
let i = 1;
while (i <= 20) {
    if (i % 2 !== 0) {
        console.log("while: " + i);
    }
    i++;
}
