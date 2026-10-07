function mergeArray(arr1, arr2) {
    let result = [];

    for (let num of arr1) {
        result.push(num);
    }
    return result;

}
console.log(mergeArray([1, 2, 3], [4, 5, 6]));

//
let arr3 = [2, 4, 6]
let arr4 = [3, 5, 7];
let merged = [...arr3, ...arr4];
console.log(merged);
