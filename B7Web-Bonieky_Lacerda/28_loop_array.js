let cores = [
    {nome: 'preto', qt: 10},
    {nome: 'azul', qt: 5},
    {nome: 'vermelho', qt: 15}
] 

/*for (let n = 0; n < cores.length; n++) {
    console.log(cores[n])
}
*/

/*for (let n in cores) {
    cores[n].nome = cores[n].nome.toUpperCase()
}
console.log(cores)
*/

for (let cor of cores) {
    console.log(`Nome: ${cor.nome} - ${cor.qt}`)
}