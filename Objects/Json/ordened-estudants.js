const estudantes = require("./estudants.json")

function ordena(lista, propriedade){
    return lista.sort((a, b) =>{
        if (a[propriedade] < b[propriedade]) return -1; // menor ele vai para frente
        if (a[propriedade]> b[propriedade])return 1;  // maior ele vai para tras
        return 0;
    })                          // ordernar todas as propriedades 
                                // apenas valores textos , strings , numericos nao!
}

const resultadoOrdenar = ordena(estudantes,'nome');
console.log(resultadoOrdenar)