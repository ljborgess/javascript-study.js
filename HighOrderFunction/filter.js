// Criar um novo array
// function(element, index , array){}




//Crinças entre 2 - 11 anos
const { childrenAge,mailList} = require("./data");

//IMUTABILIDADE
                                            //function(elemento) {
                                            //usando arrow function
                                        
const childrenAgeFiltradas = childrenAge.filter((elemento) => {
                                        // boolean aqui, faz uma verifação de true or falso usando "?"
    return elemento >= 2 && elemento <=11 ? true : false;
    
    }   
);

console.log(childrenAgeFiltradas)


//filtrar os emails

                                     //function(mail) { faz a busca por parte usando .includes
const filteredMails = mailList.filter(mail => mail.includes("@rocketseat.com"))

console.log(filteredMails)

