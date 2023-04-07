let fruits = ['Maçã', 'Uva', 'Laranja', 'Banana']

console.log(fruits.join(' -> ')) 
fruits[fruits.length - 1] = 'cacau' //Alterou o ultimo item sem menos saber qual chave pertecia.
console.log(fruits)