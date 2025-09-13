// Seleciona o elemento <main> do HTML
const main = document.querySelector("main");

// Seleciona o elemento <form> do HTML
const form = document.querySelector("form");

// Seleciona todos os elementos com a classe "submit" (pode ser mais de um)
const submit = document.getElementsByClassName("submit");

// Seleciona o primeiro submit
const firstSubmit = document.getElementById("first-submit");

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

// Seleciona os números do resultado
let animationSize;

// Cria toda a estrutura visual do resultado
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

  
  // Cria o container do botão again
  const boxSubmit = document.createElement("div");
  boxSubmit.setAttribute("class", "box-submit");

  // Cria o bottão
  const newButton = document.createElement("button");
  newButton.setAttribute("type", "submit");
  newButton.setAttribute("class", "submit new-middle-section-submit");
  newButton.setAttribute("id", "new-submit");
  newButton.innerText = "SORTEAR NOVAMENTE"

  const newButtonImg = document.createElement("img");
  newButtonImg.setAttribute("src", "img/again.png")
  newButtonImg.setAttribute("alt", "again")


  boxSubmit.append(newButton);
  newButton.append(newButtonImg);


  newMiddleSectionTopBox.append(
    newMiddleSectionTopBoxH1,
    newMiddleSectionTopBoxSpan
  );

  boxResults.append(results);

  newMiddleSection.append(newMiddleSectionTopBox, boxResults, boxSubmit);

  return newMiddleSection;
}

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

// Gera os números
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
  return generatedNumbers;
}

// Cria o visual dos números gerados
function createNumbersResult(numbersResult) {
    let results = document.querySelector(".results");

    numbersResult.forEach((generatedNumber) => {
    let newNumber = document.createElement("h1");
    newNumber.setAttribute("class", "h1animation");
    newNumber.textContent = generatedNumber;
    results.scrollTop = results.scrollHeight
    results.append(newNumber);
  });

  animationSize = document.getElementsByClassName("h1animation");

  return animationSize
}

// Captura o submit
form.addEventListener("submit", (event) => {
  // Evita que a página recarregue ao enviar o formulário
  event.preventDefault();
  const valueNumbers = Number(numbers.value)
  const valueNumbersA = Number(numbersA.value)
  if (valueNumbers === "" || valueNumbers === 0 || valueNumbersA === "" || valueNumbersA === 0) {
      alert("Erro! Por favor, forneça os números.")
  } else if (valueNumbersA > 10000) {
      alert("Erro! O limite de números é até 10000")

  }
  else {
  // Esconde a seção do meio da página (onde estão os inputs)
  middleSection.setAttribute("style", "display: none;");
  
  // Cria e adiciona a nova MiddleSection no document
  main.insertBefore(createNewMiddleSection(), main.children[1]);
  
  // Cria o Visual e os números gerados dentro da nova MiddleSection
  createNumbersResult(numbersResult());



  // Captura o novo botão criado dentro da nova MiddleSection
  const newSubmit = document.getElementById("new-submit");

  // captura o click no novo botão e gera novos números
  newSubmit.addEventListener("click", (event) => {
    event.preventDefault()
    createNumbersResult(numbersResult())
  })
  }

  if(valueNumbersDe > 999  || valueNumbersA > 999) {
    generatedNumber.forEach(element => {
      /*Aqui eu vou tentar usar um for para mudar o tamanho do resultado
      pois como ele usa class, retorna um array de elementos, então preciso usar um for para iterar cada elemento.*/
      
    });
  }
});








