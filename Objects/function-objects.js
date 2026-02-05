const estudante = {     // objeto aninhados
    //chave , valor
    nome : 'José Silva',
    idade : 32,
    cpf : '12341234122',
    turma : 'JavaScript',
    bolsista: true,
    telefones: ['5511999998', '5511939998'],
    media: 7.5,
    estaAprovado : function(mediaBase)   { // se eu usasse um arrow function , ela tem diferença , ela nao lida com o contexto  por conta do this , perde referencia do objeto
        return this.media >= mediaBase ? true : false
    }
}
console.log(estudante.estaAprovado(7))
