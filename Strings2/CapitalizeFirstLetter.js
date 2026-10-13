function capitalizeFirstletter(str) {
    return str[0].toUpperCase() + str.slice(1);

}
console.log(capitalizeFirstletter("tamanappa"));


// capitalize each word in string
function capitalizeWord(str) {
    if (!str) return null;

    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWord("tamanappa inde"))