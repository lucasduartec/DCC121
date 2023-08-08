const eLists = document.querySelectorAll("ul");

const eJunior = eLists[0];
const eMaster = eLists[1];
const eSenior = eLists[2];

let participante = { nome: "P", idade: 0 };

document.inscricao.addEventListener("submit", submitListener);

function criaElemento(nome, idade) {
  avaliaEntrada(nome, idade);

  const eNovo = document.createElement("li");
  eNovo.textContent = `${nome}, ${idade} anos`;

  if (idade < 18) eJunior.appendChild(eNovo);
  else if (idade >= 18 && idade <= 40) eMaster.appendChild(eNovo);
  else if (idade > 40) eSenior.appendChild(eNovo);
}

function submitListener(event) {
  event.preventDefault();

  participante.nome = document.inscricao.nome.value;
  Number((participante.idade = document.inscricao.idade.value));

  criaElemento(participante.nome, participante.idade);

  document.inscricao.reset();

  nome.focus();
}

function avaliaEntrada(nome, idade) {
  if (nome == "") {
    window.alert("Nome inválido");
    nome.focus();
  } else if (idade == "" || idade <= 0) {
    window.alert("Idade inválida");
    idade.focus();
  }
}
