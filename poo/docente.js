
//'strict mode'


import User from "./User.js";


//classes nao sao hoisted , tem que ser sempre depois do codigo class



class Docente extends User { 
    constructor(nome,email,nascimento , role = "docente" , ativo = true){
        super(nome,email,nascimento,role,ativo)     // superclasse  -  está dizendo que os paramentros esta na super classe  User
    }

    aprovarEstudante(estudante,curso){
        return `o(a) ${estudante} está aprovado(a) no curso de ${curso}, responsável ${this.nome}`

    }
}

//instancia da classe docente 
const novoDocente = new Docente("Luis", "l@s.com","2024-02-02")

console.log(novoDocente.aprovarEstudante("Juliana","Javascript"))

