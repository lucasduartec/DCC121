console.log("Hello 06");

//Captura referências do DOM

const eP = document.querySelector("p");
const eButton = document.querySelector("button");

function mudaTexto() {
  console.log("mudaTexto chamada!");
  eP.textContent = "Olá, funcionou!";
}

function ouvinteClick(event) {
  console.log("ouvinteClick");
  mudaTexto();
}

eButton.addEventListener("click", ouvinteClick);
