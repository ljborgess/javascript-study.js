// nao utiliza arrow function para criar methodos , nao funciona da mesma coisa que funcoes mais classicas 
// so tem o constesto da onde esta sendo executadas
const user = {
    nome :" Juliana",
    email: "j@j.com",
    nascimento:"26/06/2004",
    role:"estudante",
    ativo:true, 
    exibirinfos: function(){
        console.log(this.nome,this.email);      
    }
}
//user.exibirinfos() // perde o contesto porque é o user o nome e email 

//const exibir = user.exibirinfos
//exibir()

const exibir = function(){
    console.log(this.nome,this.email);
}
const exibirNome = exibir.bind(user) // estou dando um constesto para exibirNome agora , 
exibirNome()                //prender ou ligar duas coisas ,bindar