const fazendeiro = document.querySelector("#fazendeiro");
const lobo = document.querySelector("#lobo");
const carneiro = document.querySelector("#carneiro");
const alface = document.querySelector("#alface");

const desce = document.querySelector("#desce");
const sobe = document.querySelector("#sobe");
const reset = document.querySelector("#reset");

fazendeiro.addEventListener("click", moveFazendeiro);
lobo.addEventListener("click", moveLobo);
carneiro.addEventListener("click", moveCarneiro);
alface.addEventListener("click", moveAlface);

desce.addEventListener("click", descer);
sobe.addEventListener("click", subir);
reset.addEventListener("click", resetar);

function moveFazendeiro(event) {
  embarque_desembarque(fazendeiro);
}

function moveLobo(event) {
  embarque_desembarque(lobo);
}

function moveCarneiro(event) {
  embarque_desembarque(carneiro);
}

function moveAlface(event) {
  embarque_desembarque(alface);
}

function descer(event) {
  if (avaliaDescida() == true) {
    while (cima.firstChild) baixo.appendChild(cima.firstChild);
    baixo.style.visibility = "visible";
    cima.style.visibility = "hidden";
    setTimeout(() => {
      avaliaDerrota();
    }, 400);
  }
}

function subir(event) {
  if (avaliaSubida() == true) {
    while (baixo.firstChild) cima.appendChild(baixo.firstChild);
    cima.style.visibility = "visible";
    baixo.style.visibility = "hidden";
    setTimeout(() => {
      avaliaDerrota();
    }, 400);
  }
}

function resetar(event) {
  margemcima.appendChild(fazendeiro);
  margemcima.appendChild(lobo);
  margemcima.appendChild(carneiro);
  margemcima.appendChild(alface);
  cima.style.visibility = "visible";
  baixo.style.visibility = "hidden";
}

function embarque_desembarque(passageiro) {
  //Parte de cima
  if (passageiro.parentElement == margemcima) {
    if (cima.childElementCount == 2 || cima.style.visibility == "hidden")
      return;
    else cima.appendChild(passageiro);
  } else if (passageiro.parentElement == cima)
    margemcima.appendChild(passageiro);
  //Parte de baixo
  else if (passageiro.parentElement == margembaixo) {
    if (baixo.childElementCount == 2 || baixo.style.visibility == "hidden")
      return;
    else baixo.appendChild(passageiro);
  } else if (passageiro.parentElement == baixo)
    margembaixo.appendChild(passageiro);
  // Timeout para dar tempo do fazendeiro aparecer na margem de baixo
  setTimeout(() => {
    avaliaVitoria();
  }, 2500);
}

function avaliaDescida() {
  if (fazendeiro.parentElement == cima) return true;
  else return false;
}

function avaliaSubida() {
  if (fazendeiro.parentElement == baixo) return true;
  else return false;
}

function avaliaDerrota() {
  if (margemcima.childElementCount == 4) {
    if (
      lobo.parentElement == margemcima &&
      carneiro.parentElement == margemcima
    ) {
      alert("Você perdeu!");
      resetar();
    } else if (
      carneiro.parentElement == margemcima &&
      alface.parentElement == margemcima
    ) {
      alert("Você perdeu!");
      resetar();
    }
  } else if (margembaixo.childElementCount == 3) {
    if (
      lobo.parentElement == margembaixo &&
      carneiro.parentElement == margembaixo
    ) {
      alert("Você perdeu!");
      resetar();
    } else if (
      carneiro.parentElement == margembaixo &&
      alface.parentElement == margembaixo
    ) {
      alert("Você perdeu!");
      resetar();
    }
  }
}

function avaliaVitoria() {
  if (
    fazendeiro.parentElement == margembaixo &&
    lobo.parentElement == margembaixo &&
    carneiro.parentElement == margembaixo &&
    alface.parentElement == margembaixo
  ) {
    alert("Você ganhou!");
    resetar();
  }
}
