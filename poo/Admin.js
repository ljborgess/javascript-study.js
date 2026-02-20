import User from "../poo/User.js"


export default class Admin extends User { 
    constructor(nome,email,nascimento , role = "admin" , ativo = true){
        super(nome,email,nascimento,role,ativo)     // superclasse  -  está dizendo que os paramentros esta na super classe  User
    }

    criarCurso(nomeCurso,qtdVagas){
        return `curso ${nomeCurso} criado com ${qtdVagas} vagas`
    }
    exibirInfos(){
        const infos = super.exibirInfos()
        return `admin - ${infos}` 
    }
}

const novoAdmin = new Admin("Rodrigo", "r@r.com","2024-01-01")
console.log(novoAdmin.exibirInfos());
//console.log(novoAdmin.criarCurso("JavaScript",50))