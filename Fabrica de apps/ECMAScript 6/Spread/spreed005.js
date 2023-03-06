function cadastroPessoas(info){
    return novosDados = {
        ...info,
        sobrenome: 'Coutinho',
        

    }
}

console.log(cadastroPessoas({nome: 'Felipe', idade: '2' , cargo: 'Programador'}))