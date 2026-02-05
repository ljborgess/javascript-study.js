const estudante = {     // objeto aninhados
    //chave , valor
    nome : 'José Silva',
    idade : 32,
    cpf : '12341234122',
    turma : 'JavaScript',
    bolsista: true,
    telefones: ['5511999998', '5511939998'],//array dentro do objeto
    endereço : [{
        rua: 'Rua Joseph Climber',
        Numero: '',
        complemento:'apto 43',
    }]
}

estudante.endereço.push({       //empurrando para dentro do array endereço
    rua: 'Rua Dona Clotilde',
    Numero: '71',
    complemento:'',
})

//console.log(estudante.endereço)
//console.log(estudante.endereço[1])

                                                        //function(element, index , array)
const listaEnderecosComComplemento = estudante.endereço.filter((endereço => endereço.complemento
))

console.log(listaEnderecosComComplemento)