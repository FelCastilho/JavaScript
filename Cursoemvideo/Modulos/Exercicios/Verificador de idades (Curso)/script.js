function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    // Verificando se Ano está vazio ou maior que atual

    if (fano.value == 0 || fano.value > ano){
        alert('[Erro] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var idade = ano - Number(fano.value)

        //<img id = 'foto'>
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')
  
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', './images/bebe-homem.png')
            }else if (idade < 21 ){
                img.setAttribute('src', './images/jovem-homem.png')
            }else if (idade < 50){
                img.src = './images/adulto-homem.png'
            }else{
                img.src = './images/idoso-homem.png'
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
        }


        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        res.style.textAlign = 'Center'
        res.style.alignItems = 'Center'
    }
}