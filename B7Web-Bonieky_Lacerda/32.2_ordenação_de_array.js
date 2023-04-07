let cars = [
    { brand: 'Fiat', year: 2022 },
    { brand: 'BMW', year: 2018 },
    { brand: 'Ferrari', year: 2020 }
]

cars.sort((a,b) => {
    return a.year - b.year // Ordenou a partir do ano, do menor para o maior
})

console.log(cars)