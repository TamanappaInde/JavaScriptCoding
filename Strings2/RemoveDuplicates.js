function removeDuplicate(str) {
    return [...new Set(str)].join('');
}
console.log(removeDuplicate("tamanappa"))