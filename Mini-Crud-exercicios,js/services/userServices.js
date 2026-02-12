const fs = require('fs')

const conteudo = fs.readFileSync('./database.json', 'utf-8')
const dados = JSON.parse(conteudo)

function criarUsuario(nome, idade, cpf){
    const matricula = Date.now()

    const alunos = { 
        nome,
        idade,
        matricula,
        cpf,
    }

    dados.usuarios.push(alunos)

    fs.writeFileSync('./database.json', JSON.stringify(dados, null, 2))
}

function LerAluno(matricula){ 
    const aluno = dados.usuarios.find((user) => user.matricula === matricula)
    return aluno;
}



function listarAlunos(){
    const conteudo = fs.readFileSync('./database.json','utf-8')
    const dados = JSON.parse(conteudo)
    return dados.usuarios
}

module.exports = { 
    criarUsuario,
    LerAluno,
    listarAlunos
}
