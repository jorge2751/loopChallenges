// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

//for example
for (let i = 100; i >= 0; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// while example
let i = 100;
while (i >= 0) {
    if (i % 3 === 0) {
        console.log(i);
    }
    i--;
}
