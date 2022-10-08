var agora = new Date() //Permite pegar as horas, minutos e segundos.
var hora = agora.getHours() 
var minuto = agora.getMinutes()                        

console.log(`Agora são exatamente ${hora} horas e ${minuto} minutos!+9`)

if (hora < 12){
    console.log('Bom dia!')
}else if (hora <= 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}