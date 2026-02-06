const estudante = {     // objeto aninhados
    //chave , valor
    nome : 'José Silva',
    idade : 32,
    cpf : '12341234122',
    turma : 'JavaScript',
    bolsista: true,
    telefones: ['5511999998', '5511939998'],
    hobbies: {
  esporte: "Futebol",
  musical: "Tocar violão",
  leitura: "Livros de tecnologia",
  lazer: "Assistir séries",
  estudo: "Programação"
},
//array dentro do objeto
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

function exibirTelefone(telefone1, telefone2){
    console.log(`ligar para telefone ${telefone1}`)
    console.log(`ligar para telefone ${telefone1}`)
}

console.log(...estudante.telefones)
            // operador de espalhamento , ele literalmente pega o conteudo de array e vai espalhar ele, pegando cada um elemento


const dadosEnvio = {
    destinatario: estudante.nome,
    //endereco: estudante.enderecos[0] // nao e a forma correta de se usar, vamos melhorar esse exemplo
    //melhorando
    ...estudante.enderecos[0] // espalhamento , pega inteiro o elemento do objeto , e espalha
    
}
console.log(dadosEnvio);



const mostrarDados = {
    idade: estudante.idade,
    ...estudante.hobbies   //facilidade , no qual faz o espalhametno e voce consegue printar todos dentro desse objeto
}
console.log(mostrarDados)  
