import User from "../User.js";

class Admin extends User {
    constructor(nome,email,nascimento , role = "Admin" , ativo = true){
            super(nome,email,nascimento,role,ativo)     // superclasse  -  está dizendo que os paramentros esta na super classe  User
    }

        criarPerfil(nome,role){
            return `Perfil criado com o nome ${ nome} e seu cargo é ${role}`
        }
        criarCurso(nomeCurso,qtdVagas){
            return `o curso ${nomeCurso} com ${qtdVagas} vagas , criado com sucesso!`
        }
        excluirCurso(nomeCurso){
            return `o curso ${nomeCurso} excluido com sucesso! `
        }
        desativarPerfil(nome,role){
            return `o Perfil com o ${nome} foi desativado com sucesso, ${nome} desativado`
        }
}
const novoAdmin = new Admin("Carlos", "c@s.com","2024-02-02")
console.log(novoAdmin.desativarPerfil("Carlos","ativo"))