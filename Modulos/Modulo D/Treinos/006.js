//Declarando todas as variaveis relacionadas a datas

var agora = new Date()

var diaSem = agora.getDay()
var mes = agora.getMonth()
var ano = agora.getFullYear()

//Aplicando a data atual, mes e ano


switch(mes){
    case 0: 
        console.log('Janeiro')
        break
    case 1:
        console.log('Fevereiro')
        break
    case 2:
        console.log('Março')
        break
    case 3:
        console.log('Abril')
        break
    case 4: 
        console.log('Maio')
        break
    case 5:
        console.log('Junho')
        break
    case 6:
        console.log('Julho')
        break
    case 7:
        console.log('Agosto')
        break
    case 8:
        console.log('Setembro')
        break
    case 9:
        console.log('Outubro')
        break
    case 10:
        console.log('Novembro')
        break
    case 11:
        console.log('Dezembro')
        break
    default:
        console.log('[ERRO] A data informada é inválida!')
}

