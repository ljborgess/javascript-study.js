const estudante = {     // objeto aninhados
    //chave , valor
    nome : 'José Silva',
    idade : 32,
    cpf : '12341234122',
    turma : 'JavaScript',
    bolsista: true,
    telefones: ['5511999998', '5511939998'],//array dentro do objeto
   //nderecos : [{
   //   rua: 'Rua Joseph Climber',
   //   Numero: '',
   //   complemento:'apto 43',
   //,
   //
   //   rua: 'Rua Jolimber',
   //   Numero: '',
   //   complemento:'apto 22'
   //]
}


const chavesObjeto = Object.keys(estudante) // llista de chaves , todos as "chaves" sem os valores ,entra no array com string // posso realizar uma serie de verificações

console.log(chavesObjeto)

if (!chavesObjeto.includes("nome")){                // faz a verificação se as chaves estão retornando um valor ou nao
    console.error("É necessário ter um endereço cadastrado")
}
if (!chavesObjeto.includes("idade")){
    console.error("É necessário ter um endereço cadastrado")
}
if (!chavesObjeto.includes("cpf")){
    console.error("É necessário ter um endereço cadastrado")
}
if (!chavesObjeto.includes("turma")){
    console.error("É necessário ter um endereço cadastrado")
}
if (!chavesObjeto.includes("bolsista")){
    console.error("É necessário ter um endereço cadastrado")
}

if (!chavesObjeto.includes("enderecos")){
    console.error("É necessário ter um endereço cadastrado")
}

const Valores = Object.values(estudante)
     const texto = (`todos os valores são: ${Valores}`)
console.log(texto)