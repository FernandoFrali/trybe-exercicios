function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const decemberDays = document.querySelector("#days");

for (let indexTwo = 0; indexTwo < decemberDaysList.length; indexTwo += 1) {
  const allDays = decemberDaysList[indexTwo];
  const dayDecember = document.createElement("li");
  decemberDays.appendChild(dayDecember);
  dayDecember.innerHTML = allDays;
  dayDecember.classList.add("day");
  
  if (decemberDaysList[indexTwo] == 24) {
    dayDecember.classList.add("holiday");
  } else if (decemberDaysList[indexTwo] == 25) {
    dayDecember.classList.add("holiday");
    dayDecember.classList.add("friday");
  } else if (decemberDaysList[indexTwo] == 31) {
    dayDecember.classList.add("holiday");
  } else if (decemberDaysList[indexTwo] == 4) {
    dayDecember.classList.add("friday");
  } else if (decemberDaysList[indexTwo] == 11) {
    dayDecember.classList.add("friday");
  } else if (decemberDaysList[indexTwo] == 18) {
    dayDecember.classList.add("friday");
  }
}

function buttonOne(buttonName) {
  let buttonSelec = document.querySelector(".buttons-container");
  let buttonCreate = document.createElement("button");
  let buttonId = "btn-holiday";
  buttonSelec.appendChild(buttonCreate);
  buttonCreate.id = buttonId;
  buttonCreate.innerHTML = buttonName;
}
buttonOne("Feriados");


function changeDays() {
  let clickButton = document.querySelector("#btn-holiday");
  let holidaysButton = document.querySelectorAll(".holiday");
  let bgColor = "rgb(238,238,238)";
  let newColor = "orange";

  clickButton.addEventListener("click", function() {
    for (let indexThree = 0; indexThree < holidaysButton.length; indexThree += 1) {
      if (holidaysButton[indexThree].style.backgroundColor === newColor) {
        holidaysButton[indexThree].style.backgroundColor = bgColor;
      } else {
        holidaysButton[indexThree].style.backgroundColor = newColor;
      }
      
    }
  });

}
changeDays();

function fridayButton(nomeBotao) {
  let pickFriday = document.querySelector(".buttons-container");
  let createFriday = document.createElement("button");
  pickFriday.appendChild(createFriday);
  createFriday.innerHTML = nomeBotao;
  createFriday.id = "btn-friday";
}

fridayButton("Sexta-feira");

function changeFriday() {
  let fridayBut = document.querySelector("#btn-friday");
  let fridayAll = document.querySelectorAll(".friday");
  let fridayText = "SEXTOU!!!";
  let fridayDay = ["4", "11", "18", "25"];

  fridayBut.addEventListener("click", function() {
    for (let indexFour = 0; indexFour < fridayAll.length; indexFour += 1) {
      if (fridayAll[indexFour].innerText !== fridayText) {
        fridayAll[indexFour].innerText = fridayText;
      }
      else {
        fridayAll[indexFour].innerText = fridayDay[indexFour];
      }
    }
  })
}

changeFriday();


