// Quando se cria uma variável dentro da função, não se tem o acesso a ela fora.
// Quando se cria uma variável fora da função, se tem acesso a ela dentro.

let count = 0
function add() {
    count++
}

add()
add()
add()

console.log(`${count} -> Resultado do 1º exemplo`)

// Caso tenha uma variável dentro e fora da função, com o mesmo nome, a que tá dentro se sobressai sobre a de fora 

let c = 0
function adicionar() {
    let c = 0
    c++ 
}
adicionar()
adicionar()
console.log(`${c} -> Resultado do 2º exemplo`)
