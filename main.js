const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function (){
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");        
            textos[j].classList.remove("ativo");    
        }
        botoes[i].classList.add("ativo");   
        textos[i].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador");
const tempo1 = new Date("2024-12-11T00:00:00");

contadores[0].textContent = calculaTempo(tempo1);
function calculaTempo(tempo){
    let tempoAtual = new Date();
    let tempoFinal = tempo - tempoAtual;
    let segundos = tempoFinal / 1000;
    return segundos;
}