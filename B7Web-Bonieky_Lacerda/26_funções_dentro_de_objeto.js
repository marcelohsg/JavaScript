let pessoa = {
    nome: 'Marcelo',
    sobrenome: 'Gomes',
    idade: 30,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    } 
}

console.log(pessoa.nomeCompleto())