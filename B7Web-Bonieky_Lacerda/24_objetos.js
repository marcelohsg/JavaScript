let personagem = {
    // propriedade: valor
    nome: 'Marcelo',
    idade: 30, 
    pais: 'Brasil',
    caracteristicas: { // Objeto dentro de objeto
        forca: 20,
        magia: 5,
        stamina: 15
    },
    olhos: ['pretos', 'azuis'] 
}
console.log(`${personagem.nome} tem ${personagem.idade} anos e mora no ${personagem.pais}.`)
console.log(`E possui ${personagem.caracteristicas.forca} de força, ${personagem.caracteristicas.magia} de magia e ${personagem.caracteristicas.stamina} de estamina.`) // Selecionando um objeto dentro de um objeto.
console.log(`Seus olhos são ${personagem.olhos[1]}.`) // Selecionando um array dentro de um objeto.