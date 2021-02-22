# String

**Cadeia de caracteres**


- " " // aspas duplas 
- ' ' // aspas simples
- \` ` // taplate literals ou tamplate strings 



Quando usar uma, quando usar o outro?

## Example
````js
console.log("Lorem 'ipsum'")
console.log('Lorem "ipsum"')
````
Com a tamplate literals permite multiplas linhas e colocar expressões dentro da string:

````js
console.log(`Lorem

ipsum`)

console.log(`Lorem $ 1 + 1`)
````

# Number
- **55** // inteiros
- **25,5** // reias - float
- **Nan** // Not a Number
- **Infinity** // infinito

# Boolean

**Somente dois valores**

- **True** // Verdadeiro
- **false** // falso

# Undefined vs null

- **undefined** // indefinido

- **null** // nulo - objeto que não possui nada dentro - diferente de indefinido

# Object

 ## Object :

- Propriedades / Atributos
- funcionalidades / Métodos

{ propriedades: "valor" }

````js
console.log({
    name: "luskus",
    idade: 36,
    andar: function() {
        console.log('andar')
    }
})
````
## Praticando

````js
const person = {
    name: "John",
    age: 36,
    weight: 88.6,
    IsAdmin: true
}

console.log(' ${person.name} tem ${person.age} anos.')
````

# Array

## Array (vetores)

- Lista
- Agrupamento de dado

````js
console.log ([
    "Leite",
    "ovos",
    2,
    3
])  
````
## Praticando

````js
const animals = [
    'Lion',
    'Monkey',
    'Cat'
]

// acessar valores dentro do Array
console.log(animals) |=| 

(3) ["Lion","Monkey","Cat"]
0: "Lion"
1: "Monkey"
2: "Cat"
length: 3
__proto__: Array(0)

// acessar posisão dentro do Array

console.log(animals[0]) 

// total de elementos no Array

console.log(animals.length) 

// objetosdentro do Array

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3
    }

 console.log(animals[2]) |=|  {name: "Cat", age:3}

 console.log(animals[2].name) |=| Cat


````

# Tipos de dados

## Conforme o ECMAScript standard temos 9 tipos de dados:

### Data types

- Primitive / Primitive value
- Structutal
- Structural Primitive

### Primitive

- string
- Number
- Boolean
- Undefined
- Symbol
- BigInt

### Structural

#### object :

- Array
- Map
- Set
- Date

#### Function 

### Structural Root Primitive

- null

# Variáveis

- nomes simbólicos para receber algum valores
- Atalhos de códigos
- Identificadores
- 3 palavras reservadas para criar uma variável:

\- var

\- let

\- const

## __var__ :

````js
var clima = "quente"
clima = "Frio"

Console.log(clima) = Frio
````
* A variavel do tipo __var__ é global e, também é local 

## __let__ :

````js
let clima = "quente"
clima = "Frio"

Console.log(clima) = Frio
````
* A variavel do tipo __let__ só funcional no local onde foi criada
## __const__ :
````js
const clima = "quente"
clima = "Frio"

Console.log(clima) = Quente
````
* Apesar de __const__ ser uma Variável a atributo dela não pode ser mudado
## __Scope__

Escopo determina a visibilidade de alguma variável no JS

-  **block statement = Declaração de bloco**

 Iniciando um block :

 ````js
 /*Iniciando um block :*/ 
 {   
    Aqui é um "BLOCK" e colocamos qualquer código
 }
  /*Aqui fechamos o bloco*/
 ````

````Js

<script>
   var x // hoisting
// var  é global e, também local 

console.log('>existe x antes do bloco', x)

{
   var x = 0
}

console.log('>existe x depois do bloco', x)

<script>

````

__console.log__

> existe x antes do bloco?

`undefined`

> existe x depois do bloco? `0`

## Nomes para as variáveis

JS é case-sensitive (sensível ao caso)

JS aceita a cadeia de caracteres Unicode

### Posso :

- Iniciae com caracteres especiais: `$ _`
- Iniciae com letras
- Colocar acentos
- Letra maíusculas e minúsculas fazem diferença

### Não posso :

- Iniciar com números
- Coletar espaços vazios no nomes

### Ideal :

- Criar Nomes que fazem sentido
- Que explique o que a variável é ou faz
- camelCase
- snake_case
- Escrever em inglês

## Praticando 

````js
// Declaration ou eclaração  

var name 

// Assignment or atribuição de valores

name = "Luskus"

// que tipo de dado foi colocado na variável

console.log(typeof name)

// agrupamento de declarações

let age, isHuman

age = 24
isHuman = true

console.log(name, age, isHuman) |=| Luskus 24 true

// multiplos argumentos na função
//escrita de texto + variáveis

//conectando valores
console.log(' o ' + name + ' tem ' + age + ' anos. ') |=| o Luskus tem 24 anos.

// interpolando valores com tamplete literals or tamplete strings

console.log('o ${name} tem ${age} anos.') |=| o Luskus tem 24 anos.

````

 # Functions  

 Uma **function** pode agrupar bloco de códigos para usar em outro momento quantas vezes for necessário 



 ````js
/* declaration */

 function createPhrase () {
     console.log('Estudar é muito bom')
     console.log('Paciência e persistência')
     console.log('revisão é a mãe do aprendizado')

/* execute */

createPhrese()

````
