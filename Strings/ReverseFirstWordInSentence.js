// Reverse first word
let str = "Tamanappa Inde QA engineer Wipro";

let words = str.split(" ");
words[0] = words[0].split("").reverse().join("");
let result = words.join(" ");
console.log(result)

// Reverse each word
let result2 = str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
console.log(result2);

// Reverse first word withut using reverse
let firstWord = words[0];
let reverseFirstword = "";
for (let i = firstWord.length - 1; i >= 0; i--) {
    reverseFirstword += firstWord[i];
}
words[0] = reverseFirstword;
let result3 = words.join(" ");
console.log(result3);