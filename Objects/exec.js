const Pessoa ={ 
  nome : "Carlos Siqueira",
  notas : [7,8,9],


}


const carro = { 
  marca: "Chevrolet",
  modelo: "Camaro",
  ano: 2004,
  cor: "amarelo",
  rodas: 4,
}

for (let chave in carro){
    const  texto =  `A(o) ${chave} é ${carro[chave]}`    
        console.log(texto);

}  

