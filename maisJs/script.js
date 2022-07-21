function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar() {
    return `${nomeCompleto} andou`;
  }

  function nadar() {
    return `${nomeCompleto} nadou`;
  }

  return Object.freeze({
    nome,
    sobrenome,
    andar,
    nadar,
  });
}

console.log((criarPessoa("Paulo").text = "oi"));
