// É BASICAMENTE UM IF QUE SE FAZ EM UMA LINHA SÓ (if inline)

let isMember = true
let shipping = isMember? 2:10
console.log(isMember? 'Você é membro!':'Você não é membro!')
console.log(`Frete: r$ ${shipping},00`)

console.log ("------------- 2º exemplo -------------")

let age = 17
let isAdult = ((age >= 18 && age < 60) ? "é adulto.":"não é adulto.")
console.log(`A idade selecionada foi ${age}, logo, você ${isAdult} `)
