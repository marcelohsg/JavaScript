// Serve para multiplas condições 
// Serve para valores fixos
// Apenas para situações pontuais

let profession = 'policial'

switch (profession) {
    case 'médico':
        console.log(`A profissão ${profession} usará a cor branca`)
        break
    case 'bombeiro':
        console.log(`A profissão ${profession} usará a cor vermelha`)
        break
    case 'policial':
        console.log(`A profissão ${profession} usará a cor azul`)
        break
    default:
        console.log(`A profissão ${profession} usará a cor PRETA`)
        break    
}   