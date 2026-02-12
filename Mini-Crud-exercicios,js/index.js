
const userServices = require('./services/userServices')

userServices.criarUsuario("Luciano Borges",28, "123.456.789-00")

const usuarios = userServices.listarAlunos()
console.log(usuarios)
