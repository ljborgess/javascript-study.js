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