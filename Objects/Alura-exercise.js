const livro = { 
    titulo:"Como treinar seu dragão",
    autor:"Cressida Cowell",
    anoPublicado: 2003,
    genero:"Ação",

}
console.log(livro);

// livro.js

const anoAtual = new Date().getFullYear();

const livro2 = {
  titulo: "O Hobbit",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1937,
  genero: "Fantasia"
};

// adicionando nova propriedade
livro2.idadePublicacao = anoAtual - livro2.anoPublicacao;

const mostrarDetalhes =
  `Título: ${livro2.titulo}
Autor: ${livro2.autor}
Ano: ${livro2.anoPublicacao}
Gênero: ${livro2.genero}
Idade de publicação: ${livro2.idadePublicacao} anos`;

console.log(mostrarDetalhes);




const pessoa = {
  nome:'Carlos Ricardo',
  idade:40,
  solteiro: true,
  hobbies:[ 
    "Basquete",
    "Futebol",
    "Video-Game"
  ],
 
}

pessoa.endereço ={
  rua :" Masseli ",
  cidade: "itajubá ",
  estado:" Mg ",


}

function mostrarInfoPessoa(pessoa){
  console.log("Nome:",pessoa.nome, "|tipo;", typeof pessoa.nome)
  console.log("idade:",pessoa.idade, "|tipo;", typeof pessoa.idade)
  console.log("solteiro:",pessoa.solteiro, "|tipo;", typeof pessoa.solteiro)
  console.log("hobbies:",pessoa.hobbies, "|tipo;", typeof pessoa.hobbies)
  console.log("endereço:",pessoa.endereço, "|tipo;", typeof pessoa.endereço)
}
console.log(mostrarInfoPessoa(pessoa))



