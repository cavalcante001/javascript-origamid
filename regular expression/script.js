//  contar.innerText = 
// `${stringContador.replace
// (    /(\d)(?=(\d\d\d)+(?!\d))/g, "$1."   )}`;


const padraoRegex = /a/;
const texto = 'Javascript';
const novoTexto = texto.replace(padraoRegex, 'B');
console.log(novoTexto);