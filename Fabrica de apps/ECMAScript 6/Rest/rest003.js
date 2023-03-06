let nomes = ['Felipe', 'Miguel']

let novosNomes = cadastro(nomes, 'Alex', 'Roni') // Pegando os nomes que ja tinham e adicionando novos

function cadastro(nomes, ...novosNomes){
    totalnomes = [
        ...nomes,
        ...novosNomes
    ]

    return console.log(totalnomes)
}