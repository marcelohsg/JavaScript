function calcularImovel(metragem, quartos) {
    let m2 = 3000
    switch (quartos) {
        case 1:
            return m2*1*metragem
            break
        case 2:
            return m2*1.2*metragem
            break
        case 3:
            return m2*1.5*metragem
            break
        default:
            return 'Selecione entre 1 a 3 quartos'
            break 
    }
    
}

let metragem = 123
let quartos = 3
if (quartos <=3) {
    console.log(`A casa custa R$ ${calcularImovel(metragem,quartos)},00`)
} else {
    console.log(`${calcularImovel(metragem,quartos)}`)
}