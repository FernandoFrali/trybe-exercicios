let porcentagem = 100;

  if (porcentagem >= 90 && porcentagem >= 0 && porcentagem <= 100) {
    console.log("Sua nota é A");
}

  else if (porcentagem >= 80 && porcentagem >= 0 && porcentagem <= 100) {
    console.log("Sua nota é B");
}

  else if (porcentagem >= 70 && porcentagem >= 0 && porcentagem <= 100) {
    console.log("Sua nota é C");
}

  else if (porcentagem >= 60 && porcentagem >= 0 && porcentagem <= 100) {
    console.log("Sua nota é D");
  }

  else if (porcentagem >= 50 && porcentagem >= 0 && porcentagem <= 100) {
    console.log("Sua nota é E");
  }

  else if (porcentagem < 50 && porcentagem >= 0 && porcentagem <= 100) {
    console.log("Sua nota é F");
  }

  else {
    console.log("Error, porcentagem inválida!");
  }