const estudantes = require("./estudants.json")

function buscaInformacao(lista,chave,valor){
    return lista.find((estudante)=> estudante[chave].includes(valor)) // faz o encontro dentro da lista
                     // variavel estudadnte , aonde o objeto estudante possui uma (chave)  e vai fazer uma vefiricao se esse valor bate valor)
}

const estudandeEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
console.log(estudandeEncontrado)