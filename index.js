const wrapper = document.querySelector(".sliderWrapper");
var esquerda = document.getElementById ("esquerda");
var direita = document.getElementById ("direita");
var posiAtual = 0;
var conta = 0;
var imgs = 5;
var tamanhoSlide = 100;
var intervalo = 3500;

function moverDireita(){
    if (conta < imgs - 1){
        posiAtual -= tamanhoSlide;
        conta++;
    } else {
        posiAtual = 0;
        conta = 0;
    }
    wrapper.style.transform = `translateX(${posiAtual}vw)`;
};

function moverEsquerda(){
    if (conta > 0) {
        posiAtual += tamanhoSlide;
        conta--;
    } else {
        posiAtual = -(imgs - 1) * tamanhoSlide;
        conta = imgs - 1;
    }
    wrapper.style.transform = `translateX(${posiAtual}vw)`;
};

var slideAuto = setInterval (moverDireita, intervalo);

function resetar(){
    clearInterval (slideAuto);
    slideAuto = setInterval (moverDireita, intervalo);
};
direita.addEventListener("click" , () => {
    moverDireita();
    resetar();
});
esquerda.addEventListener("click" , () => {
    moverEsquerda();
    resetar();
});
const sub = document.getElementById('sub');
const overlay = document.getElementById('overlay');

sub.addEventListener('mouseenter', () => {
    overlay.style.display = 'block';
});
sub.addEventListener('mouseleave', () => {
    overlay.style.display = 'none';
});
sub.addEventListener('click', () => {
    overlay.style.display = 'none';
});