const substituaX = (name) => {
  const frase = "Tryber x aqui!";
  if (frase.split(" ")[1] == "x") {
    const mensagem = `Tryber ${name} aqui!`;
    return mensagem;
  }

}
console.log(substituaX("Bebeto"));