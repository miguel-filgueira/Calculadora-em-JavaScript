const visor = document.getElementById("resultado");
const button = document.querySelectorAll(".botao");

const limpar = document.getElementById("limpar");
const voltar = document.getElementById("voltar");

let primeiroNumero = 0;
let operador = "";
let segundoNumero = 0;

button.forEach((botoes) => {
    botoes.addEventListener("click", () => {
        if (visor.textContent == "0") {
            visor.textContent = botoes.value;
        } else {
            visor.textContent += botoes.value;   
        }
        if (botoes.classList.contains("botao-operador")) { 
            primeiroNumero = visor.textContent;
            operador = botoes.value;
            visor.textContent = "";
        }
        if (botoes.id === "igual") {
            segundoNumero = visor.textContent;

            if (operador === "+") {
                visor.textContent = Number(primeiroNumero)  + Number(segundoNumero);
            }

            console.log(primeiroNumero);
            console.log(operador);
            console.log(segundoNumero);
        }
    });
});

limpar.addEventListener("click", () => {
    visor.textContent = "0";
});

voltar.addEventListener("click", () => {
    visor.textContent = visor.textContent.slice(0,visor.textContent.length -1) ;
});
