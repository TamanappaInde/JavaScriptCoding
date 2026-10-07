function findLongestword(str) {
    let longest = '';
    let words = str.split(' ');

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(findLongestword("Tamanappa Inde is a Qa Engineer at Wipro tech"));