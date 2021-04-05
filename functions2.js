// criar um aplicativo de frases motivacionais

// declaration = declarção da funcão
// function statement
function createPhrases() {
  console.log('Estudar é muito bom')
  console.log('Paciência e persistência')
  console.log('Revisão é a mãe do aprendizado')
}

// exucatar a função
// rodar, chamar, invocar
// execute, run, call, invoke
createPhrases()

console.log('fim do programa')

// functions expression
// function anonymous

// parâmetros (parameters)
const sum = function(number1, number2){
  console.log(number1 + number2)
}


sum(2, 3) // arguments - argumentos

// functions expression
// function anonymous
let total = 0

// parâmetros (parameters)
const sum = function(number1, number2){
  let total = number1 + number2
  return total
}

let number1 = 34
let number2 = 25


// console.log(`o número 1 é ${number1}`)
// console.log(`o número 1 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total)

// função é um liquidificador

function fazerSuco(fruta1, fruta2){
  return 'suco de:' + fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')


console.log(copo)

// function scope
let subject 

function createThink() {
  subject = 'study'
}

console.log(subject)
createThink()
console.log(subject)

// Function hoisting

sayMyName()

function sayMyName(){
  console.log('Rael')
}

// arrow function

const sayMyName = (name) => {
  console.log(name)
}

sayMyName('Rael')

// callback function

function sayMyName(name){
  console.log('antes de executar a funcao callback')

  name()

  console.log('depois de executar a callback')
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)

/*
    Function() constructor

    * expressão
    * criar um novo objeto
    * this keyword
*/

let date = new Date("2021-03-31")

console.log(date)

/*
function Person(name) {
  this.name = name
  this.walk = function(){
    return this.name + " está andando"
  }
}
const rael = new Person("Rael")
const kel = new Person("Kel")
console.log(rael.walk())
console.log(kel.walk())
*/

/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__

*/ 

/*
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo
*/

console.log(Number('9') + 5)

// Manipulando Strings e Números

// Transformar String em Número e Número em String
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

// Manipulando Strings e Números

// Contar quantas caracteres tem uma palavra e quantos dígitos tem um número.
let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)

// Manipulando Strings e Números

// Tranformar um número com 2 casas decimais e trocar ponto ponto por vírgula.
let number = 345.33452345
console.log(number.toFixed(2).replace(".", ","))

// Manipulando Strings e Números

// Tranforme letras minúsculas em maiúsculas. Faça o contrário disso também.
let word = "Programar é muito bacana!"
console.log(word.toLowerCase().toUpperCase())

// Manipulando Strings

// Verificar se o texto contém a palavra Amor. (Há diferença entre menúscolo e maiscúlo)

let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))

// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let pharseWithUnderscore = myArray.join("_")
console.log(pharseWithUnderscore.toLowerCase())

// Manipulando Arrays

// Criar Array com construtor
let myArray = new Array('a', 'b', 'c')
console.log(myArray)

// Manipulando Arrays

// contar elementos de um array
console.log(["a", "b", "c"].length)

// Manipulando Arrays

// Transformar uma cadeia de caracteres em elementos de um array

let word = "manipulação"
console.log(Array.from(word))

// Manipulando Arrays
let techs = ["html", "css", "js"]
// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover no fim
// techs.pop()
// remover no começo
// techs.shift()
// pegar somente alguns elementos do array
// console.log(techs.slice(1, 2))
// remover 1 ou mais items em qualquer posição do array
// techs.splice(1, 2)
// encontrar a posição de um elemento no array
let index = techs.indexOf('nodejs')
techs.splice(index, 1)

console.log(techs)

// SCRIPTS // 

/* Expressões e Operadores

- Expressions
- Operators
    Binary
    Unary
    Ternary
*/

/*

    new

    * left-hand-side expression
    * criar um novo projeto
*/

let name = new String('Rael')
name.surName = 'Alves'
let age = new Number(23)
console.log(name, age)

/* 
    Operadores unários
    typeof
    delete
*/

const person = {
  name: 'Rael',
  age: 26,
}
delete person.age

console.log(person)

// Operadores Aritiméticos

// multiplição *
// console.log(3.2 * 5.5)

// divisão /
// console.log(12 / 2)

// soma +
// console.log(34 + 67) 

// subtração -
// console.log(34 - 23)

// resto da divisão %
let remainder
remainder = 11 % 10
// console.log(remainder)

// incremento ++
let increment = 0
// increment++
// console.log(++increment)
// console.log(increment)

// decremento --
let decrement = 0
decrement--
// console.log(decrement)

// exponencial **
console.log(2 ** 3)

// Grouping operator ( )
let total = (2 + 3) * 5
console.log(total)

// Operadores de comparação

// Irá comprar valores e retornar um boolean como resposta à comparação

let one = 1
let two = 2

// ==     igual
// console.log( one == 1 )
// console.log( one == "1" )

// !=     diferente
// console.log( one != two ) // true
// console.log( one != 1 ) // false
// console.log( one != "1" ) // false

// ===    estritamente igual
// console.log( one === "1" ) // false
// console.log( one === 1 ) // true

// !==    estritamente diferente
// console.log( one !== "2" ) // true
// console.log( one !== 1 ) // false

// >      maior
// console.log( one > two ) // false

// >=     maior igual
// console.log( one >= 1 ) // true
// console.log( two >= 1 ) // true

// <      menor
// console.log( one < two ) // true

// <=     menor igual
console.log( one <= two ) // true
console.log( one <= 1 ) // true
console.log( one <= 0 ) // false

// Operadores de atribuição (Assignment)
let x



// assignment
x = 1

// addition assignment
// x = x + 2
x += 2

// subtraction assignmet
// x = x - 1
x -= 1

// multiplication assignment
// x = x * 2
x *= 2

// division assignment
// x = x / 2
x /= 2

// remainder, exponetiation
// x %= 2
x **= 2
console.log(x)

// Operadores lógicos (logical operators)

// - 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

let pao = false
let queijo = true

// AND &&
// console.log(pao && queijo)

// OR ||
// console.log(pao || queijo)

// NOT !
console.log(!queijo)

// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã top
let pao = true
let queijo = false

const niceBreakfast = !queijo ? 'Café top' : 'Café ruim'

// console.log(niceBreakfast)


// Maior de 18
let age = 19
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

// Operador de String (String operator)

// comparison (comparação)
// console.log( 'a' == 'a' )

// concatenation (concatenação)
// Retorna a união de duas strings
let alpha = 'alpha'
alpha += 'bet'
console.log(alpha)

// console.log( alpha + 'bet')
// console.log( alpha += 'bet')

/*  
    Falsy
    Quando um valor é considerado false em contextos onde um booleano é obrigatório ( condicionais e loops )

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

// console.log( 0 ? 'verdadeiro' : 'falso' )

/*  
    TRUTHY
    Quando um valor é considerado true em contextos onde booleano é obrigatório ( condicionais e loops )

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

// console.log( true ? 'verdadeiro' : 'falso')

/* Operator precedence
    Precedência de operadores

* grouping                      ( )
* negação e incremento          ! + --
* multiplicação e divisão       * /   
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           &&
* OR                            ||
* condicional                   ?:  
* assignment (atribuição)       = += -= *= %
*/

// Control flow

// if...else

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature >= 37.5 && temperature >= 37

if(highTemperature) {
  console.log('Febre alta')
} else if(mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Saudável')
}

/* switch

let expression = 'b'

switch (expression) {
  case 'a':
    // código
    console.log('a')
    break
  case 'b':
    // codigo para expression b
    console.log('b')
    break
  default:
    console.log('default')
    break
}
*/

function calculate(number1, operator, number2) {
  let result = 0;

  switch (operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break  
    default:
      console.log('não implementado')
      break
  }

    return result
}


console.log(calculate(15, '/', 2))

// throw

function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }

  console.log(name)
}

// try... catch
try {
    sayMyName('Rael')
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')

// Estrutura de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento

for(let i = 10; i > 0; i--) {
  // console.log(i)
  if(i === 5) {
    // break;
    continue;
  }

  console.log(i)
}

// Estrutura de repetição
// while

let i = 0;
while(i < 10) {
    console.log(i)

    i++;
}

// for...of

let name = 'Rael'
let names = ['Isaac', 'Ismael', 'Bidinha']

for(let name of names) {
    console.log(name)
}

// for...in

let person = {
  name: 'john',
  age: 30,
  weight: 88.6
}

for(let property in person) {
  console.log(property)
  console.log(person[property])
}

/* Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérica para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

*/

let score = 100


function getScore(score) {
    let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0 

let scoreFinal;

if(scoreA) {
    scoreFinal = "A"
} else if (scoreB) {
    scoreFinal = "B"
} else if (scoreC) {
    scoreFinal = "C"
} else if (scoreD) {
    scoreFinal = "D"
} else if (scoreF) {
    scoreFinal = "F"
} else {
    scoreFinal = "Nota inválida"
}

return scoreFinal
}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(45))
console.log(getScore(60))
console.log(getScore(61))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(80))

// Sistema de gastos familiar

let family = {
  incomes: [200, 300, 250.43, 360.45],
  expenses: [320.34, 128.45, 176.87, 1450.00] 
}

function sum(array) {
   let total = 0;

   for(let value of array)
      total += value

   return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum (family.expenses)

  const total = calculateIncomes - calculateExpenses

  const itsOk = total >= 0
  
  let balanceText = "negativo"

  if (itsOk) {
      balanceText = "positivo"
  }

  console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}


calculateBalance()

/* Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

    */

    function transformDegree(degree) {
      const celsiusExists = degree.toUpperCase().includes('C')
      const fahrenheitExists = degree.toUpperCase().includes('F')
  
      // fluxo de erro
      if(!celsiusExists && !fahrenheitExists) {
          throw new Error('Grau não identificado')
      }
  
      // fluxo ideal, F -> C
      let updateDegree = Number(degree.toUpperCase().replace("F", ""));
      let formula = fahrenheit => (fahrenheit - 32) * 5/9
      let degreeSign = 'F'
  
      // Fluxo alternativo C -> F
      if(celsiusExists) {
          updateDegree = Number(degree.toUpperCase().replace("C", ""))
          formula = celsius => celsius * 9/5 + 32
          degreeSign = 'F'
      }
  
      return formula(updateDegree) + degreeSign
  }
  
  try {
      console.log(transformDegree('10C'))
      console.log(transformDegree('50F'))
      transformDegree('50Z')
  } catch (error) {
      console.log(error.message)
  }

  // Buscando e contando dados em arrays

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
        {
          title: "Os segrtedos da mente milionária",
          author: "T. Harv Eker",
        },
        {
          title: "O homem mais rico da Babilônia",
          author: "George S. Clason",
        },
        {
          title: "Pai rico, pai pobre",
          author: "Robert T. Kiyosaki e Sharon L. Lechter",
        },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
        {
          title: "Você é insubstituível",
          author: "Augusto Cury",
        },
        {
          title: "Ansiedade - Como enfrentar o mal do século",
          author: "Augusto Cury",
        },
        {
          title: "Os 7 hábitos das pessoas altamente eficazes",
          author: "Stephen R. Covey",
        },
    ],
  },
];