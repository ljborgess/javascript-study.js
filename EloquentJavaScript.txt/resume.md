### 1️⃣ Títulos sempre com ##
### 2️⃣ Código sempre em bloco ```js
### 3️⃣ Separar assuntos por linhas ---
### 4️⃣ Sempre exemplo + explicação curta



# 📘 Fundamentos do JavaScript

---

## 🔢 Aritmética

### Operador de resto (%)

Retorna o resto da divisão:

```js
314 % 100 // 14

⭐ Números especiais

Infinity → infinito positivo

-Infinity → infinito negativo

NaN → Not a Number (não é número)

"texto" * 2 // NaN

🧵 Strings

Representam textos.

"texto"
'texto'
`texto`

Escape de caracteres
"Primeira linha \n Segunda linha"

➕ Concatenação
"con" + "cat" + "enar"
// "concatenar"

🧩 Template literals

Permitem inserir valores dentro da string:

`Metade de 100 é ${100 / 2}`

⚙️ Operadores unários
typeof

Mostra o tipo do valor:

typeof 4.5 // "number"
typeof "x" // "string"

🔘 Booleanos

Resultado de comparações:

3 > 2 // true
3 < 2 // false


Operadores:

<

=

<=

==

!=

NaN == NaN // false

🧠 Operadores lógicos

&& → E

|| → OU

! → NÃO

true && false // false
true && true  // true

❓ Operador ternário
condição ? valor_true : valor_false

📭 Valores vazios

null → ausência intencional

undefined → variável sem valor definido

🔄 Conversão automática de tipos
8 * null      // 0
"5" - 1       // 4
"5" + 1       // "51"
"five" * 2    // NaN
false == 0    // true


Regra:

JS tenta converter automaticamente

quando não consegue → NaN
```

---
#### curto circuito de operadores lógicos(&& ||)
```js

O ||    operador, por exemplo, retornará o valor à sua esquerda quando esse valor puder ser convertido para verdadeiro

console.log( null || "user" )
 // → user 
console.log( "Agnes" || "user" )
 // → Agnes
 console.log( 0 || 100 );
 // → 100 
console.log( 0 ?? 100 );
 // → 0 
console.log( null ?? 100 );
 // → 100

 ```

 #### Estrutura do Programa (Structure)
```js

Encadernações (BINDING) 

vinculação ou Variavel

let caught = 5*5 ;
//definira uma ligação , se quisermos atribuir um valor por um operador 
//O =operador pode ser usado a qualquer momento em associações existentes para desconectá-las de seu valor atual e fazê-las apontar para um novo valor:
let  mood = "light" ;  // imaginar com um tentaculo , a refernecia captura um valor.
console.log(mood); // → claro 
mood = "dark" ; 
console.log(mood); // → escuro

var nome = "Aynda" //se comporta de maneira estranha essa variavel
const nomes = ("Carlos","Marina")  // const significa constante , ela define uma associacao constante, nao alterável

```

### Nomes de vinculação (Binding Names)
```js
### O ambiente (the enviropment)
    Quando um programa é inciado , o ambiente está vazio , O conjunto de associações e seus valores que existem em um determinado momento é chamado de ambiente 

### Funções (Function)
    Trecho de valor encapsulado.
o binding ""prompt"" contém uma função que exibe uma pequena caixa de diálogo solicitando a entrada do usuário. Ela é usada da seguinte forma:
prompt( "Digite a senha" );
            // está invocando uma funcao , chamando , aplicando.
            // os valores a serem passados ( nesse caso a string)são chamados de argumentos.
            // funcoes diferentes apresentam , numeros diferntes ,argumentos diferentes.

### console.log( function exemplo)
    Funcao que escreve seus argumentos em algum dispotivo de saida  de texto.
let  x = 30 ; 
console.log( "o valor de x é" , x);
 // → o valor de x é 30


### Valores de Retorno (Return values)
     As funções também podem produzir valores, caso em que não precisam ter um efeito colateral para serem úteis. Por exemplo, a função Math.maxrecebe qualquer quantidade de argumentos numéricos e retorna o maior.
    console.log(Math.max( 2 , 4 ));
 // → 4

 ###fluxo de controle ( Control flow )
                 As intruções são como uma historia , segue uma sequencia lógica de pensamento de cima para baixo.
1* pede para inserir um numero 
2* executada apos a primeira , mostra o quadrado desse numero
    let  theNumber = Number(prompt( "Escolha um número" )); 
        console.log( "Seu número é a raiz quadrada de " + theNumber * theNumber);
                // funcao number comverte esse valor em um numero. pois o valor dessa string a resposta seria um number
                //
                                   
### Execução Condicional (conditional execution)
                // nem todos os programas sao caminhos retos , podem manter um caminho ramificado.  
                //isso é chamado de execucação condicional
essa condição e criado com a paalvra IF , no caso mais simples queremos que seja executal SE(IF)
uma determinada condição for verdadeira
    let  theNumber = Number(prompt( "Escolha um número" ));
        if (!Number.isNaN(theNumber)) { 
            console.log( "Seu número é a raiz quadrada de " + theNumber * theNumber); 
}
```

#### Laços While && Do
```js
        o fluxo de controle em loop nos permite retornar a um ponto do programa onde estavamos anteriormente e repeti-lo com o estado atual do programa .
        let  number = 0 ;
            while (number <= 12 ) { 
                console.log(number); 
                number = number + 2 ; 
        } // → 0 // → 2 // … etc.

o fluxo ira continuar até a ultima instrucao validar-se verdadeira, apartir do momento que entrar  um "falso ", o lopping ele para.

```

##### DO 
```js 
um do laço é uma estrutura de controle semelhante a um while.
sempre executa seu corpo pelo menos uma vez e só começa a verificar se deve parar após essa primeira execução
let seuNome;
do {
  seuNome = prompt("Quem é voce?");
} while (!yourName);
console.log("Hello " + seuNome);
Este programa irá obrigá-lo a inserir um nome.
enquanto nao digitar um campo valido de nome, irá cair no do infinito
``` 
###### IDENTAÇÃO DE CÓDIGO
Nos exemplos, adicionei espaços antes de instruções que fazem parte de uma instrução maior. Esses espaços não são obrigatórios — o computador aceitará o programa perfeitamente sem eles. Aliás, até mesmo as quebras de linha em programas são opcionais. Você poderia escrever um programa como uma única linha longa, se quisesse.
```js 
if (false != true) { 
  console.log( "Faz sentido." );
   if ( 1 < 2 ) { 
    console.log( "Sem surpresas." ); 
  } 
}
``` 
###### LAÇOS for 

```js     for  (inicialização; condição; incremento)
for ( let  number = 0 ; number <= 12 ; number = number + 2 ) { 
  console.log(number); 
} // → 0 // → 2 // … etc.