function carregar(){

    let now = new Date()
    let hour = now.getHours()
    let minutes = now.getMinutes()

    let msg = document.getElementById('message')
    let res = document.getElementById('result')
    let img = document.getElementById('image')

    res.innerHTML = `Agora são ${hour}:${minutes}`

    if (hour < 12){
        msg.innerHTML = 'bom dia'
        img.innerHTML = '<img src = ../images/manha.png>'
        document.body.style.backgroundcolor = '#ffdbae'
    }else if (hour <= 18){
        msg.innerHTML = 'Tenha uma <strong>boa tarde</strong>!'
        img.innerHTML = '<img src = ../images/tarde.png>'
        document.body.style.background = '#f2c09d'
    }else{
        msg.innerHTML = 'Tenha uma boa noite!'
        img.innerHTML = '<img src = ../images/noite.png>'
        document.body.style.backgroundColor = '#0043b4'
    }
}  