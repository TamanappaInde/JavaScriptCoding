/* // Using Split, reverse and join
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Tamanappa"));

// Using for loop
function reverseString2(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString2("Tamanappa"));

// Using Recursion
function reverseStringRecursion(str) {
    if (str === "") {
        return "";
    }
    return reverseStringRecursion(str.slice(1)) + str[0];
}
console.log(reverseStringRecursion("Tamanappa"));

// Using ES6 Spread Operator
const str2 = "Tamanappa";
const reversed = [...str2].reverse().join("");
console.log(reversed);


 */

// Using Split, reverse and join
function reverseStringSplit(str) {
    return str.split("").reverse().join("");
}
console.log(reverseStringSplit("Tamanappa"));

// Using loop
function reverseStringloop(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseStringloop("Tamanappa"));

// Using Recursion
function reverseStringRecursion(str) {
    if (str === "") {
        return "";
    }
    return reverseStringRecursion(str.slice(1)) + str[0];
}
console.log(reverseStringRecursion("Tamanappa"));

// Using ES6 Spread Operator
const str = "Tamanappa";
const reversed = [...str].reverse().join("");
console.log(reversed);
