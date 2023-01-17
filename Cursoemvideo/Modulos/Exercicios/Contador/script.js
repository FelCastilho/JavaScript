function contar(){

    let start = document.getElementById('txti')
    let end = document.getElementById('txtf')
    let step = document.getElementById('txtp')
    let res = document.getElementById('resultado')
    
    if (start.value == 0 || end.value == 0 || step.value == 0 ){
        alert ('[ERRO] A caixa não pode ficar vazia')
        res.innerHTML = `Impossivel contar! ` 
    }else{
        res.innerHTML = 'Contando...'

        // Transformando as váriaveis em números

        let i = Number(start.value)
        let f = Number(end.value)
        let p = Number(step.value)

        //Acionando o for

        for(let c = i ; c <= f ; c += p)
        res.innerHTML += c
    }


}