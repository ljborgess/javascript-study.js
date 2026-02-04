// Não é imutavel 
//pega o objeto e modifica
// Nao retorna por si só um novo objeto
//Array.forEach((elemento , indice , array) => {})

const { passengers } = require("./data");

passengers.forEach(passenger => {
    passenger.age = 2019 - passenger.birthYear;
})

console.log(passengers);