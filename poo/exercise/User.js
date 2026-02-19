export default class User {
    constructor(nome,email,nascimento,role,ativo){
        this.nome = nome,
        this.email = email,
        this.nascimento = nascimento, 
        this.role = role || "estudante",
        this.ativo = ativo
    }

    criarPerfil(nome, email ,ativo){
        return `Perfil criado com o nome ${this.nome}, email ${this.email}, e está ${this.ativo}`
    }
    apagarPerfil(nome){
        return `perfil com o nome ${this.nome} apagado`
    }
    exibirInfo(){
        return `${this.nome, this.email}`
    }

}

const novoUser = new User('Luciano','l@L.com.br','21-04-04','estudante','ativo')

console.log(novoUser.apagarPerfil())
console.log(novoUser.criarPerfil())
console.log(novoUser.exibirInfo())