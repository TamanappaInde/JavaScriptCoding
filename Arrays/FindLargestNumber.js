function largestNumber(arr) {
    let largest = 0;
    for (let num of arr) {
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}
console.log(largestNumber([10, 23, 34, 56, 67]));

// Find largest number using math
function largestNumberusingmath(arr) {
    return Math.max(...arr);
}
console.log(largestNumberusingmath([23, 34, 55, 67, 78, 99]));