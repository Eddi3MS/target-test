/* 01 */

const indice = 13
let sum = 0
let k = 0

while (k < indice) {
  k = k + 1
  sum = sum + k
}

console.log(sum)

// Resultado:
// 91

/* 02 */
function isFibonacci(num) {
  let a = 0
  let b = 1

  while (b < num) {
    let temp = a + b
    a = b
    b = temp
  }

  if (num === a || num === b) {
    return `O número ${num} pertence à sequência de Fibonacci.`
  } else {
    return `O número ${num} NÃO pertence à sequência de Fibonacci.`
  }
}

const num = 22
console.log(isFibonacci(num))

// Resultado:
// O número 22 NÃO pertence à sequência de Fibonacci.

/* 03 */

const givenJSON = [
  { dia: 1, valor: 22174.1664 },
  { dia: 2, valor: 24537.6698 },
  { dia: 3, valor: 26139.6134 },
  { dia: 4, valor: 0.0 },
  { dia: 5, valor: 0.0 },
  { dia: 6, valor: 26742.6612 },
  { dia: 7, valor: 0.0 },
  { dia: 8, valor: 42889.2258 },
  { dia: 9, valor: 46251.174 },
  { dia: 10, valor: 11191.4722 },
  { dia: 11, valor: 0.0 },
  { dia: 12, valor: 0.0 },
  { dia: 13, valor: 3847.4823 },
  { dia: 14, valor: 373.7838 },
  { dia: 15, valor: 2659.7563 },
  { dia: 16, valor: 48924.2448 },
  { dia: 17, valor: 18419.2614 },
  { dia: 18, valor: 0.0 },
  { dia: 19, valor: 0.0 },
  { dia: 20, valor: 35240.1826 },
  { dia: 21, valor: 43829.1667 },
  { dia: 22, valor: 18235.6852 },
  { dia: 23, valor: 4355.0662 },
  { dia: 24, valor: 13327.1025 },
  { dia: 25, valor: 0.0 },
  { dia: 26, valor: 0.0 },
  { dia: 27, valor: 25681.8318 },
  { dia: 28, valor: 1718.1221 },
  { dia: 29, valor: 13220.495 },
  { dia: 30, valor: 8414.61 },
]

const formatValue = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

const daysWithRevenue = givenJSON.filter((day) => day.valor > 0)

const minValue = Math.min(...daysWithRevenue.map((day) => day.valor))
const maxValue = Math.max(...daysWithRevenue.map((day) => day.valor))

const sum2 = daysWithRevenue.reduce((acc, day) => acc + day.valor, 0)
const avg = sum2 / daysWithRevenue.length

const daysAboveAvg = daysWithRevenue.filter((day) => day.valor > avg).length

console.log('Menor faturamento do mês: ' + formatValue(minValue))
console.log('Maior faturamento do mês: ' + formatValue(maxValue))
console.log('Dias com faturamento acima da média: ' + daysAboveAvg)

// Resultado:
// Menor faturamento do mês: R$ 373,78
// Maior faturamento do mês: R$ 48.924,24
// Dias com faturamento acima da média: 10

/* 04 */

const revenueByState = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
}

const total = Object.values(revenueByState).reduce((acc, val) => acc + val, 0)

const revenueParticipationByState = {}

for (const state in revenueByState) {
  const valor = revenueByState[state]
  const percentual = (valor / total) * 100

  const participation = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(percentual)

  revenueParticipationByState[state] = `${participation}%`
}

console.log(revenueParticipationByState)

// Resultado:
// {
//  SP: '37,53%',
//  RJ: '20,29%',
//  MG: '16,17%',
//  ES: '15,03%',
//  Outros: '10,98%'
// }

/* 05 */

function reverseString(str) {
  let reverse = ''

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i]
  }

  return reverse
}

// Exemplo de uso
const str = 'TargetSistemas'
const reversedStr = reverseString(str)

console.log('Original:', str)
console.log('Invertida:', reversedStr)

// Resultado:
// Original: TargetSistemas
// Invertida: sametsiStegraT
