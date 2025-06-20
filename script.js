// Seleciona o elemento <form> do HTML
const form = document.querySelector("form");

// Seleciona todos os elementos com a classe "submit" (pode ser mais de um)
const submit = document.getElementsByClassName("submit");

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
}


function createNewMiddleSection() {

}



form.addEventListener("submit", (event) => {
  // Evita que a página recarregue ao enviar o formulário
  event.preventDefault();

  // Executa a função que gera os números
  numbersResult();

  // Esconde a seção do meio da página (onde estão os inputs)
  middleSection.setAttribute("style", "display: none;");
});
