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


