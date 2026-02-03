// parametros/ argumentos 
//retorno

function exibirInfosEstudante(nome, nota) { 
    return `o nome é ${nome} e a nota é ${nota}`;
}

console.log(exibirInfosEstudante('Luciano','10'));
console.log(exibirInfosEstudante('Ana','14'));

//hoisting , quando  o arquvio e lido as funções declaradas e criadas com var , sobem e leia sempre da forma correta 