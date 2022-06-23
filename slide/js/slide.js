export default class Slide {
    constructor(slide, wrapper) {
        this.slide = document.querySelector(slide);
        this.wrapper = document.querySelector(wrapper);
        this.distancia = {
            posicaoFinal:  0,
            comecoX: 0,
            comecoY: 0,
            movimentoX: 0,
            movimentoY: 0,
        }
    }

    moverSlide(distanciaX, distanciaY) {
        this.distancia.posicaoMovida = distanciaX;
        this.distancia.distanciaY = distanciaY;
        this.slide.style.transform = `translate3d(${distanciaX}px, 0, 0)`;
    }

    atualizarPosicao(clientX, clientY) {
        this.distancia.movimentoX = this.distancia.comecoX - clientX;
        this.distancia.movimentoY = this.distancia.comecoY - clientY;
        const distancia = {
            distanciaX: this.distancia.movimentoX,
            distanciaY: this.distancia.movimentoY
        }
        return distancia;
    }

    aoIniciar(event) {
        event.preventDefault();
        this.distancia.comecoX = event.clientX;
        this.distancia.comecoY = event.clientY;
        this.wrapper.addEventListener('mousemove', this.aoMover);
        
    }

    aoMover(event) {
       const distancia = this.atualizarPosicao(event.clientX, event.clientY); 
       this.moverSlide(distancia.distanciaX);
    }

    aoTerminar(event) {
        this.wrapper.removeEventListener('mousemove', this.aoMover);
        this.distancia.posicaoFinal = this.distancia.posicaoMovida;
    }

    adicionarEventoSlide() {
        this.wrapper.addEventListener('mousedown', this.aoIniciar);
        this.wrapper.addEventListener('mouseup', this.aoTerminar);
    }

    adicionarBind() {
        this.aoIniciar = this.aoIniciar.bind(this);
        this.aoMover = this.aoMover.bind(this);
        this.aoTerminar = this.aoTerminar.bind(this);
    }

    init() {
        this.adicionarBind();
        this.adicionarEventoSlide();
        return this;
    }
}