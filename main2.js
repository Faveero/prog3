const botoes = document.querySelectorAll(".botao");
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = (function (index) {
        return function () {
            for (let j = 0; j < botoes.length; j++) {
                botoes[j].classList.remove("ativo");
            }
            botoes[index].classList.add("ativo");
        };
    })(i);
}