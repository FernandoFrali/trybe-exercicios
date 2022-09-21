const custo = 5;
const valorVenda = 10;
let valorCustoTotal = custo * 1.2;
let lucro = valorVenda - valorCustoTotal;

  if (custo >= 0 && valorVenda >=0) {
    const valorCustoTotal = custo * 1.2;
    const lucro = (valorVenda - valorCustoTotal);
    console.log(lucro)
  }

  else {
    console.log("Erro, o valor não pode ser menor que zero")
  }