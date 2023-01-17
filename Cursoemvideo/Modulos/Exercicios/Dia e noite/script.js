function carregar(){

//Declarando as variaveis

var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var msg = document.getElementById('mensagem')
var img = document.getElementById('imagem')
var horaatual= document.getElementById('horario')

//Mostrando a hora para o usuário

horaatual.innerHTML = `Agora são: ${hora}:${minuto} `


if (hora < 12){
    msg.innerHTML = `Bom dia!`
    img.innerHTML = '<img src = "manha.png">'
    document.body.style.backgroundcolor = '#ffdbae'
}else if (hora <= 18){
    msg.innerHTML = `Boa tarde!`
    img.innerHTML = '<img src = tarde.png>'
    document.body.style.background = '#f2c09d'
}else{
    msg.innerHTML = `Boa noite!`
    img.innerHTML = '<img src = noite.png>'
    document.body.style.backgroundColor = '#0043b4'
}

}