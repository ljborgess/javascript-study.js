const estudantes =  require('./estudants.json')

function filtrarPorPropriedade(lista,propriedade){
    return  lista.filter((estudante)=>{
      return !estudante.endereco.hasOwnProperty(propriedade);   // booleano ,se tem a propriedade dele mesmo é a traducao disso 



    })
}

const listaEnderecosImcompletos = filtrarPorPropriedade(estudantes, 'cep');

console.log(listaEnderecosImcompletos)

//realizando uyma funcao nao qual faço a verificacao listando todos os estudantes sem CEP