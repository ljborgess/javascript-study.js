const frutas = ["Maça", "banana","pera","mamao","uva"]

console.log(frutas[0])
console.log("O nome  dessa fruta é " ,frutas[4])

    for(let x = 0; x < frutas.length; x++){
        console.log(frutas[x])
    }


//exercios 2
const array = [1,2,3,4,5,6,7,8,9,10]

    for (let k = 0; k < array.length ; k++){
        console.log(array[k])
    }

//exercicio 3

const  nomes = ["Ana"," Joao","Roberta ","Carlos"]

    nomes.forEach( x =>{
        x = console.log("nome: ", x.toUpperCase()) 

    }
)

//exercicio 4 

const lista = [1,2,3,4,5,6,76,8,123,12,312,3,4,21,4,5,123,12,31,23]
    let soma = 0;

    for ( let x = 0; x < lista.length; x++){
        soma += x;


    }
    console.log(soma)


//nivel 2 funões + arrays

const array2 = [10, 20, 30];

function somar(array) {
    let soma = 0;

    for (let x = 0; x < array.length; x++) {
        soma += array[x];
    }

    return soma;
}

console.log(somar(array2));

//exercio 2.1

function maiorNumero(array) {
    let maior = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }

    return maior;
}

console.log(maiorNumero([12, 23, 312, 4, 1, 721, 235])); // 721


//

    const array4 = [12.3123,1234,4,6,6,1,213,44,,6,123,4,6,132,,4,12,123,4,1,]
    const numerosPares = array4.filter((x)=> {
        if (x % 2 === 0){
            console.log("Todos os numeros pares", x )
        }
    })

   