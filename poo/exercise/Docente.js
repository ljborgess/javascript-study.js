import User from "../User.js";

class Docente extends User {
    constructor(nome,email,nascimento , role = "docente" , ativo = true){
            super(nome,email,nascimento,role,ativo)     // superclasse  -  está dizendo que os paramentros esta na super classe  User
    }

    criarPerfil(nome){
        return `Perfil CRIADO com sucesso com o ${nome}`

    }
    aprovarEstudante(nome){
        return `Perfil APROVADO com sucesso com o ${nome}`
    }
    reprovarEstudante(nome){
        return `Perfil REPROVADO com sucesso com o ${nome}`

    }
}

const novoDocente = new Docente("Luis", "l@s.com","2024-02-02")

console.log(novoDocente.aprovarEstudante("Carlos","Javascript"))