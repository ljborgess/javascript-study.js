//heranças

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
//quantos primitivos , ou objetos , sao feitos apartir de um prototipos basicos , base . 
//cadeia de prototipo , porque vai subidno , e esta ligado uns aos outros
//herança de prototipo-herdando propriedades de outro
Object.setPrototypeOf(admin,user)       //definindo um prototipo , que admin vai usar como prototipo(base)o objeto User.

admin.criarcurso()
admin.exibirinfos()