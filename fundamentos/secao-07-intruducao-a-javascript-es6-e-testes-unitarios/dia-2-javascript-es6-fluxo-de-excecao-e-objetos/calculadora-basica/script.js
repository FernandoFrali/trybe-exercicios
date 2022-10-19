const sum = () => {
  try {
    const value1 = document.querySelector("#value1").value;
    const value2 = document.querySelector("#value2").value;
    const result = Number(value1) + Number(value2);
    verifyIfIs(value1, value2);
    const paragrafo = document.querySelector("#result");
    paragrafo.innerHTML = `A soma de ${value1} + ${value2} dá ${result}`;
  } catch (error) {
    document.getElementById("result").innerHTML = `Erro: ${error.message}`;
  } finally {
    document.querySelector("#value1").value = ``;
    document.querySelector("#value2").value = ``;
  }
};

window.onload = () => {
  const button = document.querySelector("#button");
  button.addEventListener("click", sum);
};

const verifyIfIs = (valor1, valor2) => {
  if (valor1 == "" || valor2 == "") {
    throw new Error("Favor preencher os campos");
  } else if (isNaN(valor1) || isNaN(valor2)) {
    throw new Error("Favor inserir somente números");
  }
};
