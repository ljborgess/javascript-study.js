const estudante = {      //const x={chave,valor}

    nome : 'José Silva', 
    idade : 32,
    cpf : '12341234122',
    turma : 'JavaScript'
}

console.log(estudante.telefone);//undefined NÃO É ORDENADO
estudante.telefone = '551199999';// vai adicionar implementar um novo "telefone"

console.log(estudante.telefone);
console.log(estudante);


estudante.nome = 'José Souzas;'// fazer alteração no valor das chaves
console.log(estudante);

