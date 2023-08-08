const eValor = document.querySelector("p");

const eButtons = document.querySelectorAll("button");

const eParButton = eButtons[0];

const eImparButton = eButtons[1];

const eLists = document.querySelectorAll("ul");

const eParList = eLists[0];
const eImparList = eLists[1];

function sorteiaValor() {
  const novoNumero = Math.floor(Math.random() * 10);
  eValor.textContent = novoNumero;
}

eParButton.addEventListener("click", (event) => {
  console.log("É par!");
  criaElemento(eParList);
});

eImparButton.addEventListener("click", (event) => {
  console.log("É ímpar!");
  criaElemento(eImparList);
});

function criaElemento(lista) {
  const eLi = document.createElement("li");
  eLi.textContent = eValor.textContent;

  lista.appendChild(eLi);

  sorteiaValor();
}
