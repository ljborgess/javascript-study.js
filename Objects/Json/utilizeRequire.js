
const dados = require("./data.json");
console.log(dados);

console.log(dados.produtos)

const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
}


const objProduto =  JSON.stringify(produto)
console.log(objProduto)