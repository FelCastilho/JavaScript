function calcular(){

    let newtname = document.querySelector('input#newtxtname')
    let newage = document.getElementById('newtxtage')

    var oldname = document.getElementById('oldtxtname')
    let oldage = document.getElementById('oldtxtage')

    let res = document.getElementById('resultado')

    var name1  = String(newtname.value)
    var age1 = Number(newage.value)

    var name2 = String(oldname.value)
    var age2 = Number(oldage.value)

    var dif = age1 - age2

    res.innerHTML = `Nome da pessoa mais nova: ${name1}<br>Idade da pessoa mais nova: ${age1}<br><br>Nome da pessoa mais velha: ${name2}<br>Idade da pessoa mais velha: ${age2}<br><br>Diferença de idade: ${dif}`

}