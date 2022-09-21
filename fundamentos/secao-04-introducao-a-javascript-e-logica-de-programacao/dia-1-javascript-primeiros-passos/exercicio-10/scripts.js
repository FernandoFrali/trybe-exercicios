const salary = 3000;
let inssValue;
let baseSalary;
let liquidSalary;
let ir;

if (salary <= 1556.94) {
  inssValue = (8 * salary / 100);
  baseSalary = (salary - inssValue);
}

else if (salary >= 1556.95 && salary <= 2594.92) {
  inssValue = (9 * salary / 100);
  baseSalary = (salary - inssValue);
}

else if (salary >= 2594.93 && salary <= 5189.82) {
  inssValue = (11 * salary / 100);
  baseSalary = (salary - inssValue);
}

else if (salary > 5189.82) {
  inssValue = 570.88;
  baseSalary = (salary - inssValue);
}

else {
  console.log("Error -- Invalid salary -- can't be below zero");
}


if (baseSalary <= 1903.98) {
  liquidSalary = baseSalary;
  console.log(liquidSalary);
}

else if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
  ir = (7.5 * baseSalary / 100) - 142.80;
  liquidSalary = (baseSalary - ir);
  console.log(liquidSalary);
}

else if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
  ir = (15 * baseSalary / 100) - 354.80;
  liquidSalary = (baseSalary - ir);
  console.log(liquidSalary);
}

else if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
  ir = (22.5 * baseSalary / 100) - 636.13;
  liquidSalary = (baseSalary - ir);
  console.log(liquidSalary);
}

else if (baseSalary > 4664.68) {
  ir = (27.5 * baseSalary / 100) - 869.36;
  liquidSalary = (baseSalary - ir);
  console.log(liquidSalary);
}

else {
  console.log("Error -- invalid value");
}