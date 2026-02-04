// nao altera objeot 
// vai retornar um objeto RESPEITANDO O TAMANHO DO OBJETO ORIGINAL
const { passengers } = require("./data");

const newPassengers = passengers.map(passenger =>{
    return  `${passenger.name} tem  ${2019 - passenger.birthYear}anos`;

}
)
console.log(newPassengers)
 

//econtre o nome palindromo

const founds = passengers.map(passenger =>{
    console.log("letra: ",[].map.call(passenger.name, letter=> letter))

});