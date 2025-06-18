const form = document.querySelector("form");
const submit = document.getElementsByClassName("submit");
const numbers = document.getElementById("numbers");
const numbersDe = document.getElementById("numbersDe");
const numbersA = document.getElementById("numbersA");
const toggle = document.getElementById("toggle");
const middleSection = document.getElementById("middle-section");

// Captura o valor digitado no input "NÚMEROS"
numbers.addEventListener("input", () => {
  let valueNumbers = numbers.value.replace(/\D/g, "");

  numbers.value = Number(valueNumbers);
});

// Captura o valor digitado no input "DE"
numbersDe.addEventListener("input", () => {
  let valueNumbersDe = numbersDe.value.replace(/\D/g, "");

  numbersDe.value = Number(valueNumbersDe);
});

// Captura o valor digitado no input "A"

numbersA.addEventListener("input", () => {
  let valueNumbersA = numbersA.value.replace(/\D/g, "");

  numbersA.value = Number(valueNumbersA);
});

function numbersResult() {
  const quantity = Number(numbers.value);
  const minimum = Number(numbersDe.value);
  const maximum = Number(numbersA.value);

  const generatedNumbers = [];

  for (let index = 0; index < quantity; index++) {
    const random = Math.floor(Math.random() * (maximum - minimum)) + minimum;
    generatedNumbers.push(random);
  }

  console.log(generatedNumbers);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  numbersResult();

  middleSection.setAttribute("style", "display: none;");
});
