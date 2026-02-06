const estudante = {     // objeto aninhados
    //chave , valor
    nome : 'José Silva',
    idade : 32,
    cpf : '12341234122',
    turma : 'JavaScript',
    bolsista: true,
    telefones: ['5511999998', '5511939998'],//array dentro do objeto
    enderecos : [{
        rua: 'Rua Joseph Climber',
        Numero: '',
        complemento:'apto 43',
    },
    {
        rua: 'Rua Jolimber',
        Numero: '',
        complemento:'apto 22'
    }]
}

for (let chave in estudante)    {     // typeOf utilizei para fazer a verificação o tipo da propriedade
    const tipo = typeof estudante[chave];
    if(tipo !== 'object' && tipo !== 'function'){ // realizei a comparação de se NAO for objeto e se nao For function ele passa
        const texto = `a chave ${chave} tem o valor de ${estudante[chave]}`    // para acessar o valor de uma propriedade tem que chamar o objeto 
        console.log(texto);
    }
}



