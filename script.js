// Seleciona o elemento <main> do HTML
const main = document.querySelector("main");

// Seleciona o elemento <form> do HTML
const form = document.querySelector("form");

// Seleciona todos os elementos com a classe "submit" (pode ser mais de um)
const submit = document.getElementsByClassName("submit");

// Seleciona o primeiro submit
const firstSubmit = document.getElementById("first-submit");

// Seleciona o segunto submit (o submit criado com js);
const newSubmit = document.getElementById("new-submit");

// Seleciona o input com id "numbers" (quantidade de números a gerar)
const numbers = document.getElementById("numbers");

// Seleciona o input com id "numbersDe" (número mínimo do intervalo)
const numbersDe = document.getElementById("numbersDe");

// Seleciona o input com id "numbersA" (número máximo do intervalo)
const numbersA = document.getElementById("numbersA");

// Seleciona o elemento com id "toggle" (não está sendo usado no código atual)
const toggle = document.getElementById("toggle");

// Seleciona a seção do meio da página (possivelmente onde estão os inputs)
const middleSection = document.getElementById("middle-section");

// Quando o usuário digitar no input "numbers"
numbers.addEventListener("input", () => {
  // Remove qualquer caractere que não seja número
  let valueNumbers = numbers.value.replace(/\D/g, "");

  // Atualiza o valor no input com o número tratado
  numbers.value = Number(valueNumbers);
});

// Mesmo processo para o input "numbersDe"
numbersDe.addEventListener("input", () => {
  let valueNumbersDe = numbersDe.value.replace(/\D/g, "");
  numbersDe.value = Number(valueNumbersDe);
});

// Mesmo processo para o input "numbersA"
numbersA.addEventListener("input", () => {
  let valueNumbersA = numbersA.value.replace(/\D/g, "");
  numbersA.value = Number(valueNumbersA);
});

function numbersResult() {
  // Converte os valores dos inputs para número
  const quantity = Number(numbers.value); // Quantos números gerar
  const minimum = Number(numbersDe.value); // Valor mínimo do intervalo
  const maximum = Number(numbersA.value); // Valor máximo do intervalo

  // Array para armazenar os números gerados
  const generatedNumbers = [];

  // Laço que gera os números
  for (let index = 0; index < quantity; index++) {
    // Gera um número aleatório entre mínimo e máximo
    const random = Math.floor(Math.random() * (maximum - minimum)) + minimum;

    // Adiciona o número ao array
    generatedNumbers.push(random);
  }

  // Mostra os números no console
  console.log(generatedNumbers);
  return generatedNumbers;
}

function createNumbersResult(generatedNumbers) {
  let results = document.querySelector(".results");
  generatedNumbers.forEach((generatedNumbers) => {
    let newNumber = document.createElement("h1");
    newNumber.textContent = generatedNumbers;
    results.append(newNumber);
  });
}

form.addEventListener("submit", (event) => {
  // Evita que a página recarregue ao enviar o formulário
  event.preventDefault();

  // Executa a função que gera os números
  const numbersResultVar = numbersResult();

  // Esconde a seção do meio da página (onde estão os inputs)
  middleSection.setAttribute("style", "display: none;");

  const newMiddleSection = createNewMiddleSection();
  main.insertBefore(newMiddleSection, main.children[1]);

  createNumbersResult(numbersResultVar);
});

function createNewMiddleSection() {
  // Cria o Top-box do new-middle-section
  const newMiddleSection = document.createElement("section");
  newMiddleSection.setAttribute("id", "new-middle-section");

  const newMiddleSectionTopBox = document.createElement("div");
  newMiddleSectionTopBox.setAttribute("class", "new-middle-section-top-box");

  const newMiddleSectionTopBoxH1 = document.createElement("h2");
  newMiddleSectionTopBoxH1.textContent = "RESULTADO DO SORTEIO";

  const newMiddleSectionTopBoxSpan = document.createElement("span");
  newMiddleSectionTopBoxSpan.textContent = "1° RESULTADO";

  // Cria a div de resultados do new-middle-section
  const boxResults = document.createElement("div");
  boxResults.setAttribute("class", "box-results");

  const results = document.createElement("div");
  results.setAttribute("class", "results");

  newMiddleSectionTopBox.append(
    newMiddleSectionTopBoxH1,
    newMiddleSectionTopBoxSpan
  );
  newMiddleSection.append(newMiddleSectionTopBox, boxResults);

  boxResults.append(results);

  return newMiddleSection;
}
