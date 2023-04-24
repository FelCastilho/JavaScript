let nota = 10


if (nota > 10){
    console.log('Nota inexistente')
}else{

    switch(nota){
        case 1:
            console.log(`Você tirou ${nota} | Sua nota foi muito BAIXA`)
            break
        case 2: case 3: case 4:
            console.log(`Você tirou ${nota} | Precisa melhorar muito!`)
            break
        case 5:
            console.log(`Você tirou ${nota} | Quase atingiu a média`)
            break
        case 5.5: 
            console.log(`Você tirou ${nota} | APROVADO por pouco`)
            break
        case 6: 
            console.log(`Você tirou ${nota} | APROVADO`)
            break
        default:
            console.log(`Você tirou ${nota} | PARABENS! VOCÊ ESTÁ APROVADO`)
            break
    }
}