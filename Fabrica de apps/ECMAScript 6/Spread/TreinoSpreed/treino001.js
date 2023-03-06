function cadastroHomem(info){
    return novosDados = {
        ...info,
        cargo: 'WEb',
        código: '2'
    }
}

console.log(cadastroHomem({nome: 'Felipe', idade: 21}))