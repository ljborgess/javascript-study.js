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
    //tipo especial de metodo para somente leitura = METODO ACESSOR
    //vc nao chama ele como metodo no index , chamou como propriedade
    get nome(){
        return this.#nome
    }
    get email(){
        return this.#nome
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

    //informação nova para uma determinada propriedade 
    set nome(novoNome){
        if(novoNome === ""){
            throw new Error ('formato do nome não é valido')
        }
        this.#nome = novoNome
        
    }
    set nome(novoEmail){
        this.#nome = novoEmail
        
    }
    set nome(novoNascimento){
        this.#nome = novoNascimento
        
    }
    set nome(novoRole){
        this.#nome = novoRole
        
    }
    set nome(novoAtivo){
        this.#nome = novoAtivo
        
    }
    

    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User('Luciano','l@l.com','2024-01-01')
//console.log(novoUser)
//console.log(novoUser.exibirInfos())

//console.log(User.prototype.isPrototypeOf(novoUser))
        // tiver duvidas com cadeia de prototipo , posso recorrer a herança de prototipo para confirmar se ta recebendo ou nao