//mostra todos os nomes na lista

let usuarios = ['Felipe', 'Miguel']

let novosUsuarios = cadastrar(usuarios, 'Alex' , 'Roni')

function cadastrar (usuarios, ...novosusuarios){
    let totalusuarios = [
        ...usuarios,
        ...novosusuarios,
    ]

    return console.log(totalusuarios)
}