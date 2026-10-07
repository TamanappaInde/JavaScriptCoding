function smallestNumber(arr) {
    let smallest = arr[0];

    for (let num of arr) {
        if (num < smallest) {
            smallest = num;
        }
    }

    return smallest;

}
console.log(smallestNumber([12, 23, 34, 54, 56]));
