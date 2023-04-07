function completName(name, lastName) {
    /*console.log(`${name} ${lastName}`)*/ // Não retorna um valor
    return `${name} ${lastName}` // Agora sim retorna um valor 
    console.log('testando 1,2,3') //O return finaliza a função. Tudo após não é processado.
}

let complet = completName('Marcelo','Gomes')
console.log(`Complet Name: ${complet}`)