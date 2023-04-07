let num = 9

for (c=0;c<=10;c++) {
    let tab = num * c
    console.log(`${c} * ${num} = ${tab}`)
}

console.log('--------------------- 2º EXEMPLO ---------------------')

let produtos = [
    {nome: 'God of War', console: 'PlayStation', preco: 300},
    {nome: 'FIFA23', console: 'PlayStation/Xbox', preco: 200},
    {nome: 'Mario World', console: 'Nitendo', preco: 350},
    {nome: 'The Last Of Us', console: 'PlayStation', preco: 100},
    {nome: 'Need For Speed Underground', console: 'PlayStation/Xbox', preco: 230}
]
for (let x = 0; x < produtos.length ; x++ ) {
    console.log(`/ NOME: ${produtos[x].nome} / CONSOLE: ${produtos[x].console} / PREÇO: ${produtos[x].preco}`)
}

