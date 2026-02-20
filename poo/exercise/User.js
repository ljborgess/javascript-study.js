export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome,email,nascimento,role,ativo){
        this.#nome = nome,
        this.#email = email,
        this.#nascimento = nascimento, 
        this.#role = role || "estudante",
        this.#ativo = ativo
    }

    get nome(){
        return this.#nome
    }
    get email(){
        return this.#email
    }
    get nascimento(){
        return this.#nascimento
    }
    get role(){
        return this.#role
    }
    get ativo(){
        return this.#ativo
    }

    set nome(novoNome){
        if( novoNome === ''){
            throw new Error('Formato Inválido')
        }
        this.#nome = novoNome
    }
    set email(novoEmail){
        this.#email = novoEmail
    }
    set nascimento(novoNascimento){
        this.#nascimento = novoNascimento
    }
    set role(novoRole){
        this.#role = novoRole
    }
    set ativo(novoAtivo){
        this.#ativo = novoAtivo
    }

    criarPerfil(nome, email ,ativo){
        return `Perfil criado com o nome ${this.nome}, email ${this.email}, e está ${this.ativo}`
    }
    apagarPerfil(nome){
        return `perfil com o nome ${this.nome} apagado`
    }
    exibirInfo(nome,email){
        return `${this.nome, this.email}`
    }

}

const novoUser = new User('Luciano','l@L.com.br','21-04-04','estudante','ativo')

console.log(novoUser.apagarPerfil())
novoUser.nome = 'Rafael'
console.log(novoUser.criarPerfil())
console.log(novoUser.exibirInfo())