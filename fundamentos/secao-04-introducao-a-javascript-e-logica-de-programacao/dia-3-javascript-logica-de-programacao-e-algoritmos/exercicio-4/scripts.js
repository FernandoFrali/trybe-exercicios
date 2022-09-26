let biggestPrimeNumber = 0;

for (let numeroAtual = 2; numeroAtual <= 50; numeroAtual += 1) {
  let numeroPrimo = true;
  for (let divisor = 2; divisor < numeroAtual; divisor += 1) {
    if (numeroAtual % divisor === 0) {
      numeroPrimo = false;
    }
  }
  if (numeroPrimo) {
    biggestPrimeNumber = numeroAtual;
  }
}

console.log(biggestPrimeNumber);