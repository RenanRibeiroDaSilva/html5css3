// Strings literais
const veiculo = {
    placa: 'ABC1234',
    valor: 120000,
    modelo: 'A4',
    marca: 'Audi',
    conversivel: false
}

console.log(`O veículo da marca ${veiculo.marca} custa R$${veiculo.valor}`)

// Desestruturação - Descructuring Assignment
const {modelo, placa} = veiculo

console.log(`O veículo placa ${placa} é do modelo ${modelo}!`)

const estacionamento = {
    nome: 'Estacionamento Atlântida',
    CNPJ: '1234564545',
    endereço: {
        logradouro: 'Av. Sete Quedas',
        municipio: 'Itu',
        estado: 'SP'
    }
}

const {nome, CNPJ, endereço: {municipio, estado}} = estacionamento

console.log(nome, CNPJ, municipio, estado)
console.log(`O ${nome} está localizado em ${municipio}-${estado}`)

// REST operator ...
const [valor1, valor2, ...valorN] = [3, 10, 17, 18, 25, 42]
console.log(valor1)
console.log(valorN)

function soma(...numeros){
    return numeros.reduce((total, proximo) => total + proximo)
}

console.log(soma(4, 50))
console.log(soma(40, 500, 60))
console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9))

// Spread operator
const array1 = [5, 10, 15, 20]
const array2 = [4, 8, 12, 16, 20, 24, 28]
const array3 = [...array1, ...array2]
console.log(array3)

const estacionamento2 = {...estacionamento, CNPJ: '12.345.678/0001-32'}
console.log(estacionamento2)

// Arrow functions
const matriz = [2, 4, 6, 8, 10]
const novaMatriz = matriz.map(function(item){
    return item * 3
})
console.log(novaMatriz)

// Parei no tempo 34:54 do video Aula 04 - PI - EcmaScript.mp4