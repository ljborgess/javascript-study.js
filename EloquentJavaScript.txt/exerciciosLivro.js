for(let xadrex = 4 ; xadrex <=7; xadrex+= 1  ){
    console.log("# ".repeat(xadrex))
}

for (let i = 0; i < 4; i++) {
  let linha = "";

  for (let j = 0; j < 4; j++) {
    if ((i + j) % 2 === 0) {
      linha += "X ";
    } else {
      linha += " ";
    }
  }

  console.log(linha);
}