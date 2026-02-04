const estudante = {
    //chave , valor
    nome : 'José Silva',
    idade : 32,
    cpf : '12341234122',
    turma : 'JavaScript'
}

function exibeInfoEstudante(objEstudante,infoEstudante){
    return objEstudante[infoEstudante];
}
console.log(exibeInfoEstudante(estudante,"nome"));
console.log(exibeInfoEstudante(estudante,"cpf"));