function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('resultado')

    if(fano.value == 0){
        alert(['ERRO'])
    }else{

        var idade =  ano - Number(fano.value) 
        var genero = ''
        var fsex = document.getElementById('radsex')
        
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex [0].checked){
            genero = 'homem'

            if(idade >= 0 && idade <= 10 ){
                img.setAttribute('src', './images/bebe-homem.png')
           }
        }
        
    }
}