const pessoa = { 
    nomes : "",
    notas:[7,8,9],
    calcularMediaNotas : function(){
        return this.notas.reduce((a,b) => a+b)/ this.notas.length;

    }
}

console.log(pessoa.calcularMediaNotas())

