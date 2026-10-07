function nonrepeatingChar(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}
console.log(nonrepeatingChar("aanappaInde"));

//
function firstNonRepeatingchar(str) {
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
console.log(firstNonRepeatingchar("tamanappa"));
