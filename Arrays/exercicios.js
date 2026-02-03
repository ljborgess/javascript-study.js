function imprimir(inicio,fim){
    lista = [];

    for(let i = inicio ;i <= fim; i++){
        lista.push(i);

    }
    return lista;
}

console.log(imprimir(1,10))



// inverso do primeiro 
function imprimir2(inicio, fim) {
    let lista1 = [];

    for (let j = fim; j >= inicio; j--) {
        lista1.push(j);
    }

    return lista1;
}

console.log(imprimir2(1, 10));

//apenas numeros pares 

function pares(inicio,fim){
    let lista2 = []; 
    
    
    for (let k = inicio; k  <= fim; k++){
        if(k % 2 === 0){
            lista2.push(k);
        }

    }
    return lista2;
}
console.log(pares(0,20));


//soma acumulada

function somarNum(inicio,fim){
    let lista3 = [];

    for(let m = inicio; m <=fim; m += 1){
    lista3.push(m);
    }
    return lista3;
}

console.log(somarNum(1,100));

//multiplos de 3 

function multiplicar(inicio,fim){
    let lista4 = [];
    
    for (let n = inicio; n <= fim; n++){
        if( n % 3 === 0){
            lista4.push(n);
        }
    }
    return lista4;
}
console.log(multiplicar(1,50))

//array , lista e treinos

const nomes = ["Ana", "João", "Carlos", "Maria"];
    for (let i = 0; i < nomes.length; i++){
        console.log(nomes[i]);
    }


    //treino extra 

const numeros = [10, 20, 30, 40];
let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];

}
console.log(soma);


//outro 

const numeros1 = [2, 5, 8, 11, 14];

for (let i = 0; i < numeros.length; i++) {
    if (numeros1[i] % 2 === 0) {
        console.log(numeros[i]);
    }
}


//outro 

const array = [1,2,3,4,5,6,7,8];
let lista7 = [];

    for ( let i = 0; i < array.length; i++){
        if (array[i] % 2 === 1){
            lista7.push(array[i]);
        }
    }

console.log(lista7);


//pitr

const array2 = [1,2,3,4,5,6,7,8];
let lista8 = [];

for (let i = 0; i < array2.length; i += 2) {
    lista8.push(array2[i]);
}

console.log(lista8);





 
