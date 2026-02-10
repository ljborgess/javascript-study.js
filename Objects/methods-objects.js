const estudante = {     // objeto aninhados
    //chave , valor
    nome : 'José Silva',
    idade : 32,
    cpf : '12341234122',
    turma : 'JavaScript',
    bolsista: true,
    telefones: ['5511999998', '5511939998'],//array dentro do objeto
   //enderecos : [{
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

const Valores = Object.values(estudante)            //o metodo value desse objeto , ele mostra todos os valores presentes dentro do objeto , nao mostra as chaves. Caso eu queria mostrar todos
     const texto = (`todos os valores são: ${Valores}`)
console.log(texto)


const aluno = {
  nome: "Luciano",
  idade: 30,
  curso: "JavaScript"
};

console.log(Object.entries(aluno));// mostra todas as propriedades . mostra a [chave,valores]


const objetoOriginal = { a: 1, b: 2 }; 
const objetoParaCopiar = { b: 3, c: 4 };
                                    //nesse caso estamos criando um objeto de destino vazio ,mas caso ouvesse daria na mesma saida , pois a variavel object.assign recebe o metodo e objeto inteiro.
const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);
                        //faz a fuzao dos objetos que mandei , o original quanto a copia
console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }

const pessoa = {
  nome: "Luciano",
  notas: [8.5, 9.2, 7.8, 6.9],

  calcularMediaNotas() {        // reduce ele serve para percorrer o array , e reduzir todos os valores a unico resutaldo
    const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
    return soma / this.notas.length;
    },
  }