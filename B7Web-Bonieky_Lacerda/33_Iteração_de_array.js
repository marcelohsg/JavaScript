let fruits = ['Banana', 'Laranja', 'Maçã', 'Pêra']

console.log('------------------------- 1º exemplo -------------------------')

let bigFruits = fruits.filter ((value) => {
    return value.length > 4
})

console.log(bigFruits)

console.log('------------------------- 2º exemplo -------------------------')

let ok = fruits.every((value) => { // Se TODOS os items forem > 3. Retorna VERDADEIRO
    return value.length > 3
})

if (ok) {
    console.log('TODOS são maiores que 3')
} else { 
    console.log('Não são TODOS maior que 3')
}

console.log('------------------------- 3º exemplo -------------------------')

let okay = fruits.some((value) => { // Se ALGUNS dos items forem > 3. Retorna VERDADEIRO
    return value.length > 3
})

if (okay) {
    console.log('ALGUNS são maiores que 3')
} else { 
    console.log('ALGUNS não são maiores que 3')
}

console.log('------------------------- 4º exemplo -------------------------')

if (fruits.includes('Uva')) {
    console.log('Tem UVA sim!')
} else {
    console.log ('Tem UVA não!')
}
