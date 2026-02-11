const estudante = require("./estudant.json");

const stringEstudante = JSON.stringify(estudante);      
                            // parte da biblioteca do node , que faz a transformação do JSON em uma grande string

                            //console.log(stringEstudante);
                            //console.log(typeof stringEstudante)
console.log(stringEstudante.nome);


const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(typeof objEstudante)
console.log(objEstudante.nome)