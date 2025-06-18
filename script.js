const form = document.querySelector("form");
const submit = document.getElementsByClassName("submit");
const numbers = document.getElementById("numbers");
const numbersDe = document.getElementById("numbersDe");
const numbersA = document.getElementById("numbersA");
const toggle = document.getElementById("toggle");

// Captura o valor digitado no input "NÚMEROS"
numbers.addEventListener("input", () => {
  let valueNumbers = numbers.value.replace(/\D/g, "");

  numbers.value = valueNumbers;

  console.log(valueNumbers);

  return valueNumbers;
});

// Captura o valor digitado no input "DE"
numbersDe.addEventListener("input", () => {
  let valueNumbersDe = numbersDe.value.replace(/\D/g, "");

  valueNumbersDe = Number(valueNumbersDe);
  console.log(valueNumbersDe);

  return valueNumbersDe;
});

// Captura o valor digitado no input "A"

numbersA.addEventListener("input", () => {
  let valueNumbersA = numbersA.value.replace(/\D/g, "");

  valueNumbersA = Number(valueNumbersA);
  console.log(valueNumbersA);

  return valueNumbersA;
});
