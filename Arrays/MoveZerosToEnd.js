// Move all zeros to the end of the array while keeping the order of other elements
function moveZerosToEnd(arr) {
    let nextPosition = 0;

    for (let num of arr) {
        if (num !== 0) {
            arr[nextPosition] = num;
            nextPosition++;
        }
    }

    while (nextPosition < arr.length) {
        arr[nextPosition] = 0;
        nextPosition++;
    }

    return arr;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12]));
// Output: [1, 3, 12, 0, 0]
