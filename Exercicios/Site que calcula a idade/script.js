function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
       var fsex = document.getElementById('radsex')
       var idade = ano - Number(fano.value)
       var genero = ' '
       if (fsex[0].checked){
        genero = 'Homem'
       } else if (fsex[1].checked){
        genero = 'Mulher'
       }
       res.innerHTML = `Foi detectado ${genero} com ${idade} anos`
    }
    }