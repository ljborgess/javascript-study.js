const estudante = {
    //chave , valor
    nome : 'José Silva',
    idade : 32,
    cpf : '12341234122',
    turma : 'JavaScript'
}

                     //propriedade = conjunto de (chave, valor)
console.log(estudante.nome);
console.log(`o nome de estudante é ${estudante.nome}`);         // acessou uma string do cpf
console.log(`os tres primeiros numeros do cpf são ${estudante.cpf.substring(0, 3)}`)
