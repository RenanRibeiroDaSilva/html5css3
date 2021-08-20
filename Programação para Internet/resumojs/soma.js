/**
 * Efetua a soma de dois números
 * 
 * Essa função recebe dois números, verifica se eles são validos.
 * e retorna a soma
 * 
 * @author Renan Ribeiro
 * @version 1.0
 * @param {number} num1
 * @param {number} num2
 * @returns {number} 
 */

function soma(num1, num2){
    if (Number.isNaN(parseFloat(num1)))
        throw Error('O parametro num1 deve ser um número válido.')
    if (Number.isNaN(parseFloat(num2)))
        throw Error('O parametro num2 deve ser um número válido.')
    return (parseFloat(num1) + parseFloat(num2)).toFixed(2)
}

// console.log(parseFloat('teste'))  NaN = Not a Number
console.log(soma('10', '20'))
console.log(soma(10, '20'))
console.log(soma('10', 20))
console.log(soma(10, 20))
console.log(soma('oi', '20'))
/*
Paramos em 2:00:18 tempo da aula para retornarmos mais tarde
*/
