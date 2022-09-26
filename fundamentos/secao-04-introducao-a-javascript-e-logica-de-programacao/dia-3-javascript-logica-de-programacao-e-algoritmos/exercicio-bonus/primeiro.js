let n = 5;
let symbol = "*";
let line = "";

for (let index = 0; index < n; index += 1) {
  if (index < n) {
    line = symbol + line;
  }

}

  for (let index = 0; index < n; index += 1) {
    console.log(line);
}