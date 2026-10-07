let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


// Using loop
let arr2 = [2, 4, 6, 8, 10];
let sum2 = 0;
for (let num of arr) {
    sum2 += num;
}
console.log(sum2);
