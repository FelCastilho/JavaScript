function carregar() {
    var msg = window.document.getElementById('mensagem');
    var img = window.document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src='manha.png'
    }   else if (hora >= 12 && hora <= 18) {
        img.src='tarde.png'
    }   else if (hora > 18 && hora <= 24) {
        img.src='noite.png'
    }
}
