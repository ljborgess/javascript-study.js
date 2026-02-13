function User(nome, email){
    this.nome = nome;
    this.email = email;


    this.exibirInfos = function( ){
        return `${this.nome}, ${this.email}`
    }

}
                 // criar instancias de um objeto apartir de uma função construtora
const novoUser = new User('Luciano','l@l.com')
console.log(novoUser.exibirInfos())