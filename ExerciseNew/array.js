const array = [1, 2, 3, 4, 5, 6, 7];

const numerosPares = array.filter((x) => {
  return x % 2 === 0;
});

console.log(numerosPares);


const array2 = [1, 2, 3, 4, 5, 6, 7];
    
                    //array.reduce((acc, itemAtual, index, arrayOriginal) => {})
const maior = array2.reduce((acc, numero) =>{
                            //o primeiro paramento ele é o acumulador , ele sempre pega o anterior e soma com ele 
                            //o segundo é o que percorre a lista
    if(numero > acc){
        return numero;
    }
    return acc;
}, array[0]) // com que valor o acomulador começa , com o primeiro indice da lista

console.log(maior)


const usuarios = [
  { nome: "Carlos", idade: 17 },
  { nome: "Fernanda", idade: 25 },
  { nome: "Rafael", idade: 32 },
  { nome: "Juliana", idade: 15 },
  { nome: "Patricia", idade: 45 }
];

const resultado = usuarios.reduce((acc, usuario) => {

  if (usuario.idade < 18) {
    acc.menores.push(usuario);
  } else {
    acc.maiores.push(usuario);
  }

  return acc;

}, {
  menores: [],
  maiores: []
});

console.log(resultado);

   
const resultado2 = usuarios.reduce((acc, usuario) => {

  acc.totalUsuarios++; // soma +1
  acc.somaIdades += usuario.idade; // soma idade

  return acc;

}, {
  totalUsuarios: 0,
  somaIdades: 0
});

console.log(resultado2);