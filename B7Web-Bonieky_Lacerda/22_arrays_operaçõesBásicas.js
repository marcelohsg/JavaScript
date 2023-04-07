let ingredientes = ['água', 'farinha', 'ovo', 'corante', 'sal']

ingredientes[5] = 'fermento' //Adiciona um alemento na posição escolhida
ingredientes.push('trigo') //Adiciona o elemento no array na ultima posição [recomendado]
console.log(`Total de ingredientes: ${ingredientes.length} itens`) // Quantidade de itens
console.log(ingredientes)
ingredientes.pop() //Remove o último item do array
ingredientes.shift() // Remove o priemiro item do array
console.log(ingredientes) 
console.log(`Total de ingredientes: ${ingredientes.length} itens`)