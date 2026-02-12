
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
const exibirNome = exibir.bind(user)
exibirNome()