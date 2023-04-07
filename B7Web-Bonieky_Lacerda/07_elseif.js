// CONDIÇÃO ELSE IF
// TORNA UMA CONDIÇÃO DEPENDENTE DA OUTRA. Quando uma condição for satisfeita, o restante já é ignorado. 

let idade = 61

if (idade < 18) {
    console.log('Você é uma criança!')
} else if (idade < 60) {
    console.log('Você é um adulto!')
} else {
    console.log('Você é um idoso!')
}