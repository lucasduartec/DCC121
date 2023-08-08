let estado = {cor: "#000000",
largura: 0,
altura: 0
}

document.exm01.addEventListener("submit", submitListener);

function criaElemento(cor, largura, altura) {
  const eNovo = document.createElement("div");
  eNovo.textContent = `${cor} ${largura} ${altura} ${largura + altura} `;
  eNovo.style = `color: ${cor}`;
  document.body.appendChild(eNovo);
}

function submitListener(event) {
  event.preventDefault();
  estado.cor = document.exm01.cor.value;
  Number(estado.largura = document.exm01.largura.value);
  Number(estado.altura = document.exm01.altura.value);

  criaElemento(estado.cor,estado.largura,estado.altura);

  document.exm01.reset();
}
