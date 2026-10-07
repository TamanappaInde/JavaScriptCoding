/* let arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()); */

// Reverse array using without reverse()
function reverseArray(arr2) {
    let result = [];

    for (let i = arr2.length - 1; i >= 0; i--) {
        result.push(arr2[i]);
    }
    return result;
}
console.log(reverseArray([1, 2, 3, 4, 5]));