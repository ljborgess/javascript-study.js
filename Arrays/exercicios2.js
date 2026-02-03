
function criaArrNum(inicio,fim){
    const arr = [];
    let elemento = inicio;

    for(let i = 0, j = 0 ;j < fim; i++, elemento++) {
        arr[i] = elemento;
        j = elemento;
        
    }
    return arr;
}

console.log(criaArrNum(12, 20));


//metodos 
// clonar array multidimensional com "deep copy"
// por que nao podemos clonar arraysvia variavel

const arr1 = [[1,2],2,3];

const copiaArray = (arr) => {
    const copia = [];
    arr.forEach(elem => {if (Array.isArray(elem)) {copia.push(copiaArray(elem))}else {copia.push(elem);}
    });
    return copia;
}
const arr2 = copiaArray(arr1); 
arr1[0][0] = 5;
console.log(arr1);
console.log(arr2);


//filtrar um array e alterar valores esfecificos
//ex alterar numeros para strings 

const cpfs =['1234567813412','1234123424324','234234131434','13412341243']
const result = cpfs.map(cpf => {if(typeof cpf === 'string'){return cpf}else{ return cpf.toString()}})

console.log(result);



