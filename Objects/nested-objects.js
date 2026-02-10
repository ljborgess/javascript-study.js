const estudante = {     // objeto aninhados
    //chave , valor
    nome : 'José Silva',
    idade : 32,
    cpf : '12341234122',
    turma : 'JavaScript',
    bolsista: true,
    telefones: ['5511999998', '5511939998'],//array dentro do objeto
    
}


estudante.endereço = {
    rua: 'Rua Joseph Climber',
    Numero: '',
    complemento:'apto 43',
}

console.log(estudante)
console.log(estudante.endereço.rua)//pegar dentro no nested (aninhado)