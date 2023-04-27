let nome = document.getElementById('nometxt')
let sobrenome = document.getElementById('sobrenometxt')
let idade = document.getElementById('idadetxt')
let res = document.getElementById('result')

function enviar(){
    res.innerHTML = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        idade: idade.value
    }

}