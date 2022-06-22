function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 3000); //Carro construtor de honda
                           //honda é um objeto que vem do construtor carro, só por termos colocado new na frente
                          //this é simplismente o objeto carro
const fiat = new Carro('Fiat', 4000);   
fiat.marca = 'Fiat';