Aritmetica = 

∞ é usado para respetar a operação de restoX % Y 
// resto da divisao 

ex 314 % 100        ∞ = 2 
-------------------
Numeros especiais =

 Os dois primeiros são `0` Infinity e `1` -Infinity


 NaNSignifica "não é um número",

--------------------
String = representativo de texto //Você pode usar aspas simples, aspas duplas ou crases para marcar sequências de caracteres,
" La no mar" 
"Deite-se no oceano"
"Flutue no oceano"

uma barra invertida (\ \) dentro do texto entre aspas indica que o caractere seguinte possui um significado especial. (Escape de caractre, escaping the character)
        "Esta é a primeira linha \n E esta é a segunda"

Unicode

------------------
Cadeias de caracteres não podem ser divididas, multiplicadas ou subtraídas. O +operador `&` pode ser usado nelas, não para somar, mas para concatenar — para unir duas cadeias de caracteres. A seguinte linha produzirá a cadeia de caracteres "concatenate":

"con" + "cat" + "e" + "nate"


${}de um template literal
Strings entre crases (``), geralmente chamadas de literais de modelo (template literals ), podem fazer alguns truques a mais.Além de poderem abranger várias linhas, elas também podem incorporar outros valores.

`Metade de 100 é ${ 100 / 2 } `
-------------------

OPERADORES UNARIOS (UNARY OPERATORS)
Nem todos os operadores são símbolos. Alguns são escritos como palavras. Um exemplo é o typeofoperador `&`, que produz um valor de string indicando o tipo do valor fornecido.
console.log( typeof  4.5 )
 // → número 
console.log( typeof  "x" )
 // → string
operador menos (- -) pode ser usado tanto como um operador binário quanto como um operador unário.
console.log(- ( 10 - 2 ))
 // → -8

 -------------------
 VALORES BOOLEANOS (BOOLEAN VALUE)
 Eis uma maneira de produzir valores booleanos(comparação):
 console.log( 3 > 2 )
 // → verdadeiro 
 console.log( 3 < 2 )
 // → falso

  -------------------
  > "maior que" 
  < "menor que"
  >=(maior ou igual a), 
  <=(menor ou igual a), 
  ==(igual a),
  !=(diferente de).

Em JavaScript, existe apenas um valor que não é igual a si mesmo, e esse valor é NaN(“não é um número”).
console.log(NaN == NaN)
 // → falso

 ---------------------
 Operadores lógicos
 "raciocinar" sobre valores booleanos.
 `and`, e 
 `or`, ou 
` not`, nao ! inverte o valor que lhe atribuiu 
`&&`, e 
'||',ou
console.log(true && false)
 // → false 
console.log(true && true) // → true

1 + 1 == 2 && 10 * 10 > 50

 ---------------------
Operador Ternário(Operador condicional || conditional operator  )
?
if (x, y) a ? b : c

usa o valor esquerdo com o sinal da verificacao
, o resultado será `true` bquando a `x` for verdadeiro e c `false` caso contrário.

-----------------------
valores vazios || Empty values
null    -ausencia de valor significativo
undefined   -ausencia de valor significativo

-----------------------
Conversão automatica de tipo || Automatic type conversion

console.log( 8 * null )
 // → 0 
console.log( "5" - 1 )
 // → 4 
console.log( "5" + 1 )
 // → 51 
console.log( "five" * 2 )
 // → NaN 
console.log(false == 0 )
 // → true

 !!!O `int` null na primeira expressão se torna `int` 0 e o `number` "5" na segunda expressão se torna `int` 5(de string para número). No entanto, na terceira expressão, o JavaScript + tenta concatenar strings antes de somar os números, então o `number` 1 é convertido para `int` ( "1"de número para string).

 !!!!!Quando algo que não corresponde a um número de forma óbvia (como ` "five"n` ou `n` undefined) é convertido para um número, você obtém o valor `n` NaN.