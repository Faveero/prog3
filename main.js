const botoes = document.querySelectorAll(".botao");
console.log(botoes)
for (let i = 0; i < botoes.lenght; i++) {
    botoes[i].onclick = function (){
        for (let j = 0; j < botoes.lenght; j++) {
            botoes.classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
    }
}