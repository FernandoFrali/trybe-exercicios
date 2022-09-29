let bodyText = document.createElement("h1");

bodyText.innerHTML = "Exercício - JavaScript DOM";
document.body.appendChild(bodyText);

// aqui são os estilos que apliquei ao H1 na tag body.
document.querySelector("h1").style.backgroundColor = "gray";
document.querySelector("h1").style.padding = "10px";

// parte 2

let main = document.createElement("main");
document.body.appendChild(main);
main.className = "main-content";

// parte 3

let section = document.createElement("section");
let mainSec = document.querySelector("main");
mainSec.appendChild(section);
section.className = "center-content";

// parte 3

let tagP = document.querySelector("section");
let tagDois = document.createElement("p");

tagP.appendChild(tagDois)
tagDois.innerHTML = "Bom diaaa!"

// parte 4

let sectionTwo = document.createElement("section");
mainSec.appendChild(sectionTwo);
sectionTwo.className = "left-content";

// parte 5

let sectionThree = document.createElement("section");
mainSec.appendChild(sectionThree);
sectionThree.className = "right-content";

// parte 6

let image = document.createElement("img");

sectionThree.appendChild(image);
image.className = "small-image";
image.src = "https://picsum.photos/200";

// parte 7

let unorder = document.createElement("ul");
const list = ["Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"] ;
sectionThree.appendChild(unorder);

for (let index = 0; index < list.length; index += 1) {
  let listT = document.createElement("li");
  unorder.appendChild(listT);
  listT.innerHTML = list[index];
}

// parte 8

for (let indexTwo = 1; indexTwo <= 3; indexTwo += 1) {
  let titleTres = document.createElement("h3");
  titleTres.innerHTML = "";
  main.appendChild(titleTres);
}