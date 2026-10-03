function findMissingNumber(arr) {
    let n = arr.length + 1;
    let expected = (n * (n + 1)) / 2;
    let actualsum = 0;
    for (let num of arr) {
        actualsum += num;
    }
    return expected - actualsum;
}
console.log(findMissingNumber([1, 2, 4, 5, 6, 7]));