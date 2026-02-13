const user = {
    nome :" Juliana",
    email: "j@j.com",
    nascimento:"26/06/2004",
    role:"estudante",
    ativo:true, 
    exibirinfos: function(){
        console.log(this.nome,this.email);      
    }
};
const admin = {
    nome :" Mariana",
    email: "m@m.com",
    nascimento:"26/06/2004",
    role:"admin",
    ativo:true, 
    criarcurso: function(){
        console.log('Curso Criado!');
    }
}

Object.setPrototypeOf(admin,user)
admin.criarcurso()
admin.exibirinfos()