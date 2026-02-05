const Client = { 
    name: "Andre",
    age: 32,
    cpf:'12312321412',
    email:"andre@dominio.com",
}

console.log(`O nome do cliente é ${Client.name} e essa pessoa tem ${Client.age} anos . Seu cpf é ${Client.cpf} e seu email está como ${Client.email}`);

console.log(`Os 3 primeiros digitos do CPF de ${Client.name} é ${Client.cpf.substring(0,3)}`);


const chaves = ["name", "age", "cpf", "email",];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${Client[chave]}`);
});