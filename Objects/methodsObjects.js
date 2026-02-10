const carro = { 
  marca: "Chevrolet",
  modelo: "Camaro",
  ano: 2004,
  cor: "amarelo",
  rodas: 4,
  ligado : true,
  estaligado: function()   { // se eu usasse um arrow function , ela tem diferença , ela nao lida com o contexto  por conta do this , perde referencia do objeto
        console.log(this.ligado ? "O  está ligado":"O carro #$está desligado");
            
    }
}

carro.estaligado();