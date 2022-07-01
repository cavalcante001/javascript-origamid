const cep = document.querySelector('input[name=cep]');

const loading = () => {
    const div = document.createElement('div');
    div.classList = 'loading';
    div.innerHTML = `<p>Carregando...</p>`
    document.body.appendChild(div);
    return div;
};

const handleChange = (e) => {
    const carregamento = loading();
    const valorInput = e.target.value;
    console.log(valorInput);
    if(valorInput.length == '8') {
        setTimeout(() => {
            fetch(`https://viacep.com.br/ws/${valorInput}/json/`)
            .then(response => response.json())
            .then(r => {
               document.querySelector('input[name=logradouro]').value = r.logradouro;
               document.querySelector('input[name=bairro]').value = r.bairro;
               document.querySelector('input[name=localidade]').value = r.localidade;
               document.querySelector('input[name=uf]').value = r.uf;
               document.querySelector('input[name=ddd]').value = r.ddd;
               return true;
            }).then(result => {
                carregamento.remove();
            });
        },[1000]);
    } else {
        carregamento.remove();
        alert('cep inválido');
    }
}

cep.addEventListener('change', handleChange);
