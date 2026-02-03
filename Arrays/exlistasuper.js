
//nivel Um

const nomes = ["Ana", "Bruno", "Carlos"];

        nomes.forEach(nomes => {
            console.log(nomes);
        })
   
//nivel 2 


const numeros = [1,2,3,4,5,6,7,8];
    
function pares (inicio, fim){
    let arr = [];

    for( let i = inicio ; i <= fim; i++){
        if(i % 2 ===0){
            arr.push(i);
        }

    }
    return arr;
}
console.log(pares(10,20))

//nivel 3 

function filtrar(inicio,fim){
    let maiores = [];
    for(let k = inicio; k <= fim ; k++){
        if (k >= 18){
            maiores.push(k)
        }
    }
    return maiores;
}
console.log(filtrar(0,55))



//nivel 4 

const array  = [2, 4, 6];
    let newArray = [];

    for(let y = 0; y < array.length;y++){
        newArray.push(array[y]*2);
        
    }
    console.log(newArray);



0//nivel 5


const lnomes = ["ana", "bruno", "carlos"];
    let newlnomes = [];
    
    for(let x = 0; x < lnomes.length; x++){
       
        newlnomes.push(lnomes[x].toUpperCase());

    }
console.log(newlnomes);

//nivel 6 

const pedidos = ["Confirmado", "Pago", "Enviado", "Entregue"];
    newPedidos = [];
    
    for (let f = 0; f < pedidos.length; f++){
        if (f = "Confirmado"){
            console.log("Seu pedido foi", f);
        } else {
            return pedidos;
        }
        if (f = "Pago"){
            console.log("Seu pedido foi", f);
        } else {
            return pedidos;
        }
       if (f = "Enviado"){
            console.log("Seu pedido está caminho");
        } else {
            return pedidos;
        }
        if (f = "Entregue"){
            console.log("Seu pedido foi", f);
        } else {
            return pedidos;
        }
    }

//nivel 7 


const despesas = [120, 80, 45.5, 200, 60];
        soma = 0;

        for (u = 0; u < despesas.length; u++){
            soma += despesas[u];
        }
    console.log("total gasto:", soma);


//nivel 8

const notas = [7, 5, 9, 3, 8];
        soma = 0
      
        for( g = 0; g < notas.length; g++){
            soma += notas[g];
            media = soma/ notas.length;

            
        }
        console.log(media)

    
 //nivel 9







