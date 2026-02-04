//IMUTABILIDADE 

const { passengers } = require("./data");

//function  testeFind(element, indice, array){}


//econtre passageiro do nome enzo

const Enzo = passengers.find(passanger => 
    passanger.name.toLowerCase() === "enzo" 

);

console.log(Enzo);