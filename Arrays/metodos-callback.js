
//metodos array 
const arrNumeros = [12,23,34,45,56]

arrNumeros.push(67);
console.log(arrNumeros);

arrNumeros.pop()
console.log(arrNumeros);

const elem = arrNumeros.indexOf(12);

const novoArr = arrNumeros.slice(2);
console.log(novoArr);


 //Metodos callback

 const arrCalculado = arrNumeros.map((num) => {
    return num * 10;
 }
);
console.log(arrCalculado);





arrNumeros.forEach((num,i)=> {
    console.log(`o número ${num} está no indice ${i}`)
}
);



const arrFiltrado = arrNumeros.filter (num => num % 5 === 0);
console.log(arrFiltrado);



