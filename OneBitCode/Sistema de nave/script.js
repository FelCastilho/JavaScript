
var title = document.getElementById('txt')
var nome = prompt('Qual o seu nome?')

title.innerHTML = `Bem vindo ${nome}`

//Programando o botão

function calcular(){

var txtvel = document.getElementById('txtvel')
let res = document.getElementById('resultado')

var vel = Number(txtvel.value)

res.innerHTML = `<br>A velocidade atual é de ${vel} Km/Hr<br>` 

if (vel <= 0){
    res.innerHTML += '<p>A nave está parada. Considere partir e aumentar a velocidade</p>'
}else if (vel <= 40 ){
    res.innerHTML += '<p>Você está devagar, podemos aumentar mais!</p>'
}else if (vel >= 40 && vel < 80){
    res.innerHTML += '<p>Parece uma boa velocidade para manter!</p>'
}else{
    alert('Velocidade alta detectada!')
    confirm('Deseja acelerar?')
    res.innerHTML += '<p>Velocidade perigosa! Controle automático forçado!</p>'
}

}
