/*
    Para comentar em várias linhas:
*/
// Para comentar em uma única linha:
//console.log('Fui carregado!')

// Para definir váriaveis:
var empresa = 'FATEC / Itu'
var numero = 42
var fumante = false

// Para criar uma array:
var frutas = ['Melão', 'Abacaxi', 'Morango']

console.log(frutas[1])

// Para criar um objeto em JS:
var cliente ={
    nome: 'Zé',
    idade: 45,
    pessoaFisica: true
}

console.log(cliente) // Exibindo todo o objeto
console.log(cliente.nome) // Exibindo apenas um atributo do objeto

// Números:
var num1 = 10.40
var num2 = '20'
var soma = parseFloat(num1) + parseFloat(num2) // parseInt
console.log(soma)

// String:
var curso = 'gestÃO de Ti'
console.log(curso.length) // Tamanho da string
console.log(curso.toUpperCase()) // Converte para maiúsculo
console.log(curso.replace('Ã', 'A').toLowerCase()) // Busca e troca
console.log(curso.charAt(8)) // Retorna a posição da string no 8º caracter

/* Operadores lógicos:
 && AND
 || OR
 ! NOT
*/ 

var late = true
var peso = 12
// Condicional:
if (!late && peso > 10){
    console.log('É um cão grande')
}else{
    console.log('Pode ser um gatinho...')
}
// Operador Ternario:
var mia = true
var bichinho = 'O animal provavelmente é um ' + (mia ? 'gatinho' : 'cachorrinho')
console.log(bichinho)

// For:
for (var contador=0; contador <= 10; contador++){
    console.log(contador) // console.warn(), console.error()
}

// While:
var passos = 6400
while(passos > 50){
    console.log(passos)
    passos /= 5
}

// Objetos - coleção de pares nome-valor:
var fornecedor = {} // Essa é top!
var tansportadora = new Object() // Reservado para os nerds
var animal = {
    nome: 'Jack Bauer',
    idade: 60,
    peso: 0.90,
    detalhes: {
        raça: 'York',
        sexo: 'Macho'
    }
}

console.log(animal['detalhes']['sexo'])

// Vetores:
var vegetais = [] // Criar um novo array
var legumas = new Array()
var times = ['Flamengo', 'Fluminense', 'Bota Fogo', 'Vasco', 'Macaé']
console.log('São '+times.length+' times')
 
for (var contadortime = 0; contadortime < times.length; contadortime++){
    console.log(times[contadortime])
}

