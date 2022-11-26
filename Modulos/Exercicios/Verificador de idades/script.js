//Aplicando a função no botão verificar 

function verificar(){

    //Criando as variaveis para mostrar a data

    var data = new Date()
    var ano = data.getFullYear()//Ano do sistema
    var fano = document.getElementById('anoinput')//Ano Usuário
    var res = document.getElementById('resultado')

    var fsex = document.getElementById('radsex')
    var genero = ''
    //Impondo as condições

    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] A data informada é inválida!')

    }else{
        if (fsex[0].checked){
            genero = 'Homem'
        }else if{}
    }



}