function firstNonrepeatingchar(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
}
console.log(firstNonrepeatingchar("tamanappa"));


// using 
function countchar(str) {
    const count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of str) {
        if (count[char] === 1) {
            return char;
        }
    }
    return null;
}
console.log(countchar("tamanappa"))