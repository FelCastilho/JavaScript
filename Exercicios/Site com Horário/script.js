function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
    if (hora >= 0 && hora < 12){
        img.src = '<img src="fotomanha.png>'
    }
    else if (hora >= 12 && hora <= 18){
        img.src = '<img src="fotomanha.png>'
    }
    else{
        img.src = '<img src="fotomanha.png>'
    }

}
