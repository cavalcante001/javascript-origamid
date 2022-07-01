const promessa = new Promise((resolve, reject) => {
    let condicao = false;
    if(condicao) {
        setTimeout(() => {
            resolve({'Nome':'Paulo', 'idade':23});
        }, 1000);
    } else {
        reject('erro');
    }   
});

const retorno = promessa.then(resolucao => console.log(resolucao)
, rejeitado => {
    console.log('Foi rejeitado: '+rejeitado);
}).finally(() => {
    console.log('Promessa concluída com sucesso!');
});
