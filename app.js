let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio!";

function first(){
    console.log("O Botão foi clicado");
}

function qualCidade() {
    let userCidade = prompt("Qual sua cidade");
    alert(`Estive em ${userCidade} e me lembrei de você!`);
}

function love() {
    alert("Eu amo js");
}

function somando() {
    let num1 = prompt("Digite aqui o primeiro número de nossa soma");
    let num2 = prompt("Digite aqui o segundo número de nossa soma");
    let soma = Number(num1) + Number(num2);
    alert(`A soma dos números digitados é ${soma} !`);
}