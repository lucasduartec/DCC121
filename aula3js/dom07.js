console.log("Hellow");

//Busca uma referências para todos os elementos
const eSpans = document.querySelectorAll("span");

const eA = eSpans[0];
const eB = eSpans[1];
const eC = eSpans[3];
const eSymbol = eSpans[2];

const eButtons = document.querySelectorAll("button");
const eButtonSoma = eButtons[0];
const eButtonMultiplica = eButtons[1];

eButtonSoma.addEventListener("click", somaListener);
eButtonMultiplica.addEventListener("click", multiplicaListener);

function somaListener(event) {
  console.log("Soma Listener");
  soma();
}
function multiplicaListener(event) {
  console.log("Multiplica Listener");
  multiplica();
}

//Opera os dados

function soma() {
  const A = Number(eA.textContent);
  const B = Number(eB.textContent);
  const C = A + B;
  eSymbol.textContent = "+";
  eC.textContent = C;
}

function multiplica() {
  const A = Number(eA.textContent);
  const B = Number(eB.textContent);
  const C = A * B;
  eSymbol.textContent = "*";
  eC.textContent = C;
}
