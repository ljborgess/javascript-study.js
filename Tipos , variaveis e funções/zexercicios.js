//1 exercicio


console.log("\n exericio 01");
const frase = "QUERO SABER O TIPO DA FRASE";
console.log("Comprimento:", frase.length)
console.log("Maisculas:", frase.toUpperCase())

//2 exercicio

console.log("exericio 02");
let variavelNull = null;
let variavelUnd;

console.log(typeof variavelNull);
console.log(typeof variavelUnd);

//3 exercicio 

console.log("exericio 03");
let numero = 15;
let string = 'string';
let boolean = true;

console.log(`numero : ${numero}, string : ${string}, boolean: ${boolean}`);


//4 exericio

console.log("exercicio 04");

let num = 8;
let stg = "50";

let numParaString = num.toString()
let stgParaNum = parseInt(stg)

console.log("Valor:", numParaString, "-tipo:",typeof numParaString)
console.log("Valor:", stgParaNum, "-tipo:",typeof stgParaNum)


//exercicio 05 
console.log("exercicio 05");

let exerc = "Faça a modificação agora";

console.log(`Maiusculo : ${exerc.toUpperCase()}, Minusculo:${exerc.toLowerCase()}, slice: ${exerc.slice()}`);


//exercicio 06

const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;

console.log(resultado);

//exercicio 07
//exercicio 08
//exercicio 09