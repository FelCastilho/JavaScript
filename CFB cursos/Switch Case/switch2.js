let nota = 10

switch(nota){
    case 1 : case 2: case 3: case 4: case 5:
        console.log(`Nota: ${nota}, REPROVADO`)
        break
    case 5.5:
        console.log(`Nota: ${nota}, Aprovado`)
        break
    default:
        console.log(`Nota: ${nota}, PARABENS`)
        break

}