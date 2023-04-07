// Em uma função, enviamos dados(entrada), ela processa e retorna um resultado.
// ENTRADA --> PROCESSAMENTO --> SAÍDA

function soma (n1=0,n2=0) {
    let resultado = n1+n2
    console.log(`O resultado da soma de ${n1} + ${n2} = ${resultado}`)
}

soma(5,10)

//-----------------------------------------------------------------------------

function completName(name,lastName) {
    console.log(`${name} ${lastName}`)
}

completName("Marcelo", "Gomes")
completName("Henrique","Silva") //A função pode ser usada repetidas vezes. Apenas tem que chama-la