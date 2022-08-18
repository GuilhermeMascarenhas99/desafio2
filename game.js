let nickName = document.querySelector(".barraNome");
let inputNum = document.querySelector(".barraNum");
let jogador = document.querySelector(".nomeJoga");

function numAdivinha() {
  numero = parseInt(Math.random() * (max - min) + min)
  console.log("O numero é " + numero);
}

function iniciarJogo() {
  jogador.innerHTML = nickName.value;
  let select = document.querySelector(".selectInter");
  let value = select.options[select.selectedIndex].value;
  console.log(value);

  switch (value) {
    case "opcao1":
      result = getRnd.option1();
      console.log(result);
      break;

    case "opcao2":
      result = getRnd.option2();
      console.log(result);
      break;

    case "opcao3":
      result = getRnd.option3();
      console.log(result);
      break;

    default:
      break;
  }

}

const getRnd = {
  option1: () => {
    let min = 1;
    let max = 10;
    let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return secretNumber;
  },
  option2: () => {
    let min = 1;
    let max = 100;
    let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return secretNumber;
  },
  option3: () => {
    let min = 1;
    let max = 200;
    let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return secretNumber;
  }
}

let qtdTenta = 3;

function adivinharNum() {
  let btnJogar = document.querySelector(".botaoJogar");
  let alertTenta = document.querySelector(".respTenta");
  let resultNum = document.querySelector(".resultNum");
  let respTenta = document.querySelector(".respTenta")

  respTenta.innerHTML = qtdTenta

  if (inputNum.value == result) {
    resultNum.innerHTML = "Parabéns, você conseguiu adivinhar";
    console.log("acertou");
  } else if (inputNum.value < result) {
    qtdTenta--;
    resultNum.innerHTML = "O número digitado é menor";
    console.log("Numero Menor");
  } else if (inputNum.value > result) {
    qtdTenta--;
    resultNum.innerHTML = "O número digitado é maior";
    console.log("Numero Maior");
  } else {
    console.log("Errou");
  }
  respTenta.innerHTML = `Você tem ${qtdTenta} tentativas`;
  if (qtdTenta == 0) {
    respTenta.innerHTML = "Você Errou !";
    resultNum.innerHTML = "Acabou suas tentaivas recarregue a página !!";
    btnJogar.disabled = true;
  }
}

let botaoInicio = document.querySelector(".botaoIniciar").addEventListener("click", iniciarJogo);
let btnJogar = document.querySelector(".botaoJogar").addEventListener("click", adivinharNum);