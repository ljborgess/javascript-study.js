const estudantes = require("./estudants.json")

function ordena(lista, propriedade){
    return lista.sort((a, b) =>{
        if (a[propriedade] < b[propriedade]) return -1;
        if (a[propriedade]> b[propriedade])return 1;
        return 0;
    })   // ordernar todas as propreidades 
}

const resultadoOrdenar = ordena(estudantes,'nome');
console.log(resultadoOrdenar)