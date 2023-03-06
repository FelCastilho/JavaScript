function cadastroPessoa(info){
    return novosDados = {
        ...info, 
        sobrenome: 'Coutinho',
        código: 2
    }
}

console.log(cadastroPessoa({nome: 'Felipe', idade: '45', anoInicio: '2045'}))