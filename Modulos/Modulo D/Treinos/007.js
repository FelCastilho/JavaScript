var agora = new Date()

var hora = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()

var ano = agora.getFullYear()
var mes = agora.getMonth()
var diaMes = agora.getDate() // Pega o dia do Mês
var diaSem = agora.getDay() //Pega os dias da Semana




//Aplicando o dia da semana baseada no horário atual

switch (diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunda-feira')
        break
    case 2: 
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4: 
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sabado')
        break
}

console.log(`Agora são:  ${hora}:${minutos}:${segundos}`)




