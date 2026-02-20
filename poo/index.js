import User from "../poo/User.js"
import Admin from "../Admin.js";


const novoUser = new User("Rafael","j@j.com","2042-42-42")
//novoUser.#nome = "Marcia"
//console.log(novoUser.exibirInfos())
//console.log(novoUser.#nome)
console.log(novoUser.exibirInfos());
//novoUser.nome = "Carlos",
//console.log(novoUser.nome);
const novoAdmin = new Admin("Rodrigo","R@r.com","2024-01-01")
console.log(novoAdmin.exibirInfos());

