let word = "banana";
let invert = "";

for (let index = 0; index < word.length; index += 1) {
  invert += word[word.length - 1 - index];
}

console.log(invert);