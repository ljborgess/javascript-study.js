const estudante = {      //const x={chave,valor}

    nome : 'José Silva', 
    idade : 32,
    cpf : '12341234122',
    turma : 'JavaScript'
}

console.log(estudante.telefone);//undefined NÃO É ORDENADO
estudante.telefone = '551199999';// vai adicionar implementar um novo "telefone"

console.log(estudante.telefone);
console.log(estudante);


estudante.nome = 'José Souzas;'// fazer alteração no valor das chaves
console.log(estudante);


const Estudante2 = {};
Estudante2.nome = 'Ana Maria';
console.log(Estudante2)

const objPersonagem = { //realizando um delete de um value dentro de um object 
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
 aliado: {
   nome: "Saruman",
   classe: "mago"
 },
 status: "desaparecido"
}

delete objPersonagem.aliado 
console.log(objPersonagem.aliado) //undefined