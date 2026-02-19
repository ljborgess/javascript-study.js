export default class  User {
    constructor(nome,email,nascimento,role,ativo = true){
        this.nome = nome 
        this.email = email 
        this.nascimento = nascimento 
        this.role = role || "estudante"
        this.ativo = ativo
    }

    exibirInfos(){
        return `${this.nome, this.email}`
    }
}

const novoUser = new User('Luciano','l@l.com','2024-01-01')
//console.log(novoUser)
//console.log(novoUser.exibirInfos())

//console.log(User.prototype.isPrototypeOf(novoUser))
        // tiver duvidas com cadeia de prototipo , posso recorrer a herança de prototipo para confirmar se ta recebendo ou nao