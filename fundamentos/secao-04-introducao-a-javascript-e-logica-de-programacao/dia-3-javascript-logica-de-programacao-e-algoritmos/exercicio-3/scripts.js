let array = ['java', 'javascript', 'python', 'html', 'css'];
let result = array[0];
let resultDois = array[0];

for (let index = 0; index < array.length; index += 1) {

  if (array[index].length > result.length) {
    result = array[index];
  }
}


for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < resultDois.length) {
    resultDois = array[index];
  }
}

console.log(result);
console.log(resultDois);