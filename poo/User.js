export default class  User {
    #nome
    #email
    #nascimento // deixa privado , encapsulamento dentro somente da classe
    #role
    #ativo
    constructor(nome,email,nascimento,role,ativo = true){
        this.#nome = nome 
        this.#email = email 
        this.#nascimento = nascimento 
        this.#role = role || "estudante"
        this.#ativo = ativo
    }

    #montaObjUser(){
        return ({
            nome: this.#nome,
            email : this.#email,
            nascimento : this.#nascimento,
            role: this.#role,
            role : this.#ativo
        })
    }

    exibirInfos(){
        const objUser = this.#montaObjUser()
        return `${objUser.nome}, ${objUser.email}`
    }
}

const novoUser = new User('Luciano','l@l.com','2024-01-01')
//console.log(novoUser)
//console.log(novoUser.exibirInfos())

//console.log(User.prototype.isPrototypeOf(novoUser))
        // tiver duvidas com cadeia de prototipo , posso recorrer a herança de prototipo para confirmar se ta recebendo ou nao