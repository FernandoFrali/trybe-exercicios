let xadrez = "Rei";

switch (xadrez.toLowerCase()) {
  case "rei":
    console.log("rei -> uma casa em qualquer direção");
     break;
  case "bispo":
    console.log("bispo -> diagonais");
      break;
  case "peao":
    console.log("peao -> para frente");
      break;
  case "cavalo":
    console.log("cavalo -> move-se em L");
      break;
  case "torre":
    console.log("torre -> linhas retas");
      break;
  case "rainha":
    console.log("rainha -> qualquer direção");
      break;
  default:

    console.log("Peça inválida")
}
